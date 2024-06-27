import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { StatusEnum } from "~/enums/StatusEnum";
import { ContentRegistrationsCrad } from "~/types/RegistrationCard";
import { ButtonSmall } from "~/components/common/Buttons";
import { ModalDialog } from "~/components/common/Modal";
import { Notification }  from "~/components/common/Notification";

import useRegistrationActions from "~/hooks/useRegistration";
import { formatDate } from "~/utils/validateDate";

const RegistrationCard = ({ data, updateData }: ContentRegistrationsCrad) => {
  const formateDate = formatDate(data.admissionDate)
  
  const {
    notification,
    modalVisible,
    handleOpenModal,
    handleCloseModal,
    handleConfirmAction
  } = useRegistrationActions(data, updateData);  

  return (
    <>
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
          <span>{formateDate}</span>
        </S.IconAndText>
        <S.Actions>
          {data.status === StatusEnum.Review ? (
            <>
              <ButtonSmall bgcolor="rgb(255, 145, 154)" onClick={() => handleOpenModal(StatusEnum.Reproved)}>Reprovar</ButtonSmall>
              <ButtonSmall bgcolor="rgb(155, 229, 155)" onClick={() => handleOpenModal(StatusEnum.Approved)}>Aprovar</ButtonSmall>
            </>
          ) : (
            <ButtonSmall bgcolor="#ff8858" onClick={() => handleOpenModal(StatusEnum.Review)}>Revisar novamente</ButtonSmall>
          )}
          <HiOutlineTrash onClick={() => handleOpenModal('DELETE')} />
        </S.Actions>

        <ModalDialog
          show={modalVisible ? modalVisible : undefined}
          onClose={handleCloseModal}
          onConfirm={handleConfirmAction}
          title="Confirmação"
          message="Você tem certeza que deseja realizar esta ação?"
        />
      </S.Card>
      {notification.message && <Notification message={notification.message} />}
    </>
  );
};

export default RegistrationCard;
