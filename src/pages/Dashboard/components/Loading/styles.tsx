import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: rgba(232, 5, 55, 1) rgb(255, 117, 0) rgb(255, 117, 0) rgb(255, 117, 0);
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 1s infinite;
  animation: spin 1s infinite;

  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: rgb(255, 117, 0);
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;