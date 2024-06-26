import { useState } from "react";
import { StatusEnum } from "~/enums/StatusEnum";
import { api } from "~/services";
import { RegistrationData } from "~/types/RegistrationCard";
import useNotify from "./useNotify";

const useRegistrationActions = (data: RegistrationData, updateData: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState('');
  const { notification, notifySuccess } = useNotify();

  const handleStatusChange = async (newStatus: StatusEnum) => {
    if (data.status !== newStatus) {
      try {
        await api.updateRegistration(data.id, {
          ...data,
          status: newStatus
        });

        notifySuccess(`Status alterado para ${newStatus}`);
        updateData();
        
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleStatusDelete = async () => {
    try {
      await api.deleteRegistration(data.id);
      notifySuccess('Registro excluído com sucesso');
      updateData();

    } catch (error) {
      console.error(error);
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
    handleOpenModal,
    handleCloseModal,
    handleConfirmAction
  };
};

export default useRegistrationActions;
