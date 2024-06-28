import { useEffect, useState } from "react";
import { StatusEnum } from "~/enums/StatusEnum";
import { api } from "~/services";
import { RegistrationData } from "~/types/RegistrationCard";
import useNotify from "./useNotify";

const useRegistrationActions = (data?: RegistrationData, updateData?: () => void) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState('');
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { notification, notifySuccess } = useNotify();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.getRegistrations();
        setRegistrations(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching registrations:', error);
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const updateRegistrations = async () => {
    setIsLoading(true);
    try {
      const response = await api.getRegistrations();
      setRegistrations(response);
    } catch (error) {
      console.error('Error updating registrations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (newStatus: StatusEnum) => {
    if (data && data.status !== newStatus) {
      try {
        await api.updateRegistration(data.id, {
          ...data,
          status: newStatus
        });

        notifySuccess(`Status alterado para ${newStatus}`);
        if (updateData) updateData();
        
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleStatusDelete = async () => {
    if (data) {
      try {
        await api.deleteRegistration(data.id);
        notifySuccess('Registro excluído com sucesso');
        if (updateData) updateData();

      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleOpenModal = (action: any) => {
    setModalAction(action);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleConfirmAction = () => {
    switch (modalAction) {
      case StatusEnum.Reproved:
      case StatusEnum.Approved:
      case StatusEnum.Review:
        handleStatusChange(modalAction);
        break;
      case 'DELETE':
        handleStatusDelete();
        break;
    }
    setModalVisible(false);
  };

  return {
    notification,
    modalVisible,
    registrations, 
    isLoading, 
    handleOpenModal,
    handleCloseModal,
    handleConfirmAction,
    updateRegistrations
  };
};

export default useRegistrationActions;
