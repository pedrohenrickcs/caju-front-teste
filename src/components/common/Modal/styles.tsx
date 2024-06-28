import styled from 'styled-components';

export const ModalBackground = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
  border-radius: 5px;
  width: 300px;
  z-index: 1001;
`;

export const ModalHeader = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button<{ primary?: boolean }>`
  background-color: ${({ primary }) => (primary ? '#007bff' : '#6c757d')};
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#5a6268')};
  }
`;