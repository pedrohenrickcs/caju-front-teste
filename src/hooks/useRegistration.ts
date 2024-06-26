import { useState } from "react";
import { StatusEnum } from "~/enums/StatusEnum";
import { api } from "~/services";
import { RegistrationData } from "~/types/RegistrationCard";

const useRegistrationActions = (data: RegistrationData) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState('');

  const handleStatusChange = async (newStatus: StatusEnum) => {
    
    if (data.status !== newStatus) {
      try {
        await api.updateRegistration(data.id, {
          ...data,
          status: newStatus
        });

        localStorage.setItem('notifyMessage', `Status alterado para ${newStatus}`);
        window.location.reload();
        
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleStatusDelete = async () => {
    try {
      await api.deleteRegistration(data.id);

      localStorage.setItem('notifyMessage', 'Registro excluído com sucesso');
      window.location.reload();

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
    modalVisible,
    handleOpenModal,
    handleCloseModal,
    handleConfirmAction
  };
};

export default useRegistrationActions;
