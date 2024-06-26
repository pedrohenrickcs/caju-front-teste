import * as S from "./styles";

export const Notification = ({ message, type }: any) => {
  return (
    <S.NotificationContainer type={type} show={!!message}>
      {message}
    </S.NotificationContainer>
  );
};