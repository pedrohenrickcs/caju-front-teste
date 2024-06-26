import styled, { css } from 'styled-components';

type NotificationContainerProps = {
  show: boolean;
}

export const NotificationContainer = styled.div<NotificationContainerProps>`
  position: fixed;
  bottom: 60px;
  right: 60px;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  background-color: #9be59b;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;

  ${(props: any) =>
    props.show &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;
