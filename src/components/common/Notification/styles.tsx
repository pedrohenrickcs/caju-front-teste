import styled, { css } from 'styled-components';

export const NotificationContainer = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  background-color: ${(props: any) => (props.type === 'success' ? '#9be59b' : '#ff919a')};
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
