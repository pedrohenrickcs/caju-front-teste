
import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";

import { ContentRegistrations } from "~/types/Registrations";
import { RegistrationData } from "~/types/RegistrationCard";
import { StatusEnum } from "~/enums/StatusEnum";

const allColumns = [
  { status: StatusEnum.Review, title: "Pronto para revisar" },
  { status: StatusEnum.Approved, title: "Aprovado" },
  { status: StatusEnum.Reproved, title: "Reprovado" },
];

const Collumns = ({ registrations, updateData }: ContentRegistrations) => {
  return (
    <S.Container>
      {allColumns.map((collum) => {
        const columnRegistrations = registrations?.filter((registration) => registration.status === collum.status);

        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent>
                {columnRegistrations?.map((registration, i) => (
                  <RegistrationCard data={registration as RegistrationData} key={i} updateData={updateData} />
                ))}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
