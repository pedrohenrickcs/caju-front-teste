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

const RegistrationCard = ({ data }: ContentRegistrationsCrad) => {

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

  const handleReprovedClick = () => {
    handleStatusChange('REPROVED');
  };

  const handleApprovedClick = () => {
    handleStatusChange('APROVED');
  };

  const handleReviewClick = () => {
    handleStatusChange('REVIEW');
  };

  const handleDeleteClick = () => {
    handleStatusDelete();
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
            <ButtonSmall bgcolor="rgb(255, 145, 154)" onClick={handleReprovedClick}>Reprovar</ButtonSmall>
            <ButtonSmall bgcolor="rgb(155, 229, 155)" onClick={handleApprovedClick}>Aprovar</ButtonSmall>
          </>
        ) : (
          <ButtonSmall bgcolor="#ff8858" onClick={handleReviewClick}>Revisar novamente</ButtonSmall>
        )}
        <HiOutlineTrash onClick={handleDeleteClick} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
