import * as S from "./styles";

interface NotificationProps {
  message: string;
}

export const Notification = ({ message }: NotificationProps) => {
  return (
    <S.NotificationContainer show={!!message}>
      {message}
    </S.NotificationContainer>
  );
};
