import { ButtonSmall } from "~/components/common/Buttons";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { StatusEnum } from "~/enums/StatusEnum";
import { api } from "~/services";
import { ContentRegistrationsCrad } from "~/types/RegistrationCard";
import { useState } from "react";
import ModalDialog from "~/components/common/Modal";

const RegistrationCard = ({ data }: ContentRegistrationsCrad) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState('');


  const handleStatusChange = async (newStatus: string) => {
    if (data.status !== newStatus) {
      try {
        await api.updateRegistration(data.id, {
          ...data,
          status: newStatus
        });
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleStatusDelete = async () => {
    try {
      await api.deleteRegistration(data.id);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenModal = (action: string) => {
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
  
  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{data.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{data.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{data.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {data.status === StatusEnum.Review ? (
          <>
            <ButtonSmall bgcolor="rgb(255, 145, 154)" onClick={() => handleOpenModal('REPROVED')}>Reprovar</ButtonSmall>
            <ButtonSmall bgcolor="rgb(155, 229, 155)" onClick={() => handleOpenModal(StatusEnum.Approved)}>Aprovar</ButtonSmall>
          </>
        ) : (
          <ButtonSmall bgcolor="#ff8858" onClick={() => handleOpenModal(StatusEnum.Review)}>Revisar novamente</ButtonSmall>
        )}
        <HiOutlineTrash onClick={() => handleOpenModal('DELETE')} />
      </S.Actions>

      <ModalDialog
        show={modalVisible}
        onClose={handleCloseModal}
        onConfirm={handleConfirmAction}
        title="Confirmação"
        message="Você tem certeza que deseja realizar esta ação?"
      />
    </S.Card>
  );
};

export default RegistrationCard;
