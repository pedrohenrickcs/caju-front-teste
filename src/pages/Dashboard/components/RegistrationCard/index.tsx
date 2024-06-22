import { ButtonSmall } from "~/components/Buttons";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { updateRegistration } from "~/services/registrations";

type ContentRegistrationsCrad = {
  data: any;
};

const RegistrationCard = ({ data }: ContentRegistrationsCrad) => {

  const handleReprovedClick = async () => {
    try {
      await updateRegistration(data.id, { 
          ...data,
          status: 'REPROVED' 
        });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleApprovedClick = async () => {
    try {
      await updateRegistration(data.id, { 
        ...data,
        status: 'APROVED' });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReviewClick = async () => {
    try {
      await updateRegistration(data.id, { 
        ...data,
        status: 'REVIEW' });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
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
        <ButtonSmall bgcolor="rgb(255, 145, 154)" onClick={handleReprovedClick}>Reprovar</ButtonSmall>
        <ButtonSmall bgcolor="rgb(155, 229, 155)" onClick={handleApprovedClick}>Aprovar</ButtonSmall>
        <ButtonSmall bgcolor="#ff8858" onClick={handleReviewClick}>Revisar novamente</ButtonSmall>

        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
