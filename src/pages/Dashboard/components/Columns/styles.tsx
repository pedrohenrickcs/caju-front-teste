import styled from "styled-components";
import { StatusEnum } from "~/enums/StatusEnum";
const registrationStatusStyles: {
  [key in StatusEnum]: { background: string; title: string };
} = {
  [StatusEnum.Review]: {
    background: "#FDF8E9",
    title: "#EFC24D",
  },
  [StatusEnum.Approved]: {
    background: "#EEEEFD",
    title: "#4242DF",
  },
  [StatusEnum.Reproved]: {
    background: "#FBEDF6",
    title: "#CE2893",
  },
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin-top: 24px;

  @media screen and (max-width: 800px) {
    overflow-x: scroll;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      258deg,
      rgba(255, 117, 0, 1) 8%,
      rgba(232, 5, 55, 1) 53%
    );
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
     background: linear-gradient(
      258deg,
      rgba(255, 117, 0, 1) 80%,
      rgba(232, 5, 55, 1) 53%
    );
  }
`;

export const Column = styled.div<{ status: StatusEnum }>`
  height: auto;
  background-color: ${({ status }) =>
    registrationStatusStyles[status].background};
  border-radius: 32px;
  min-height: 80vh;
  max-height: 80vh;

  @media screen and (max-width: 800px) {
    min-width: 300px;
  }
`;

export const TitleColumn = styled.h3<{ status: StatusEnum }>`
  margin: 0px;
  color: ${({ status }) => registrationStatusStyles[status].title};
  margin: 24px;
`;

export const CollumContent = styled.div`
  overflow: auto;
  max-height: 85%;
`;
