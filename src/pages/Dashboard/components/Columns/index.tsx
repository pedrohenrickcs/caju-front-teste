
import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import { ContentRegistrations } from "~/types/Registrations";

const allColumns = [
  { status: 'REVIEW', title: "Pronto para revisar" },
  { status: 'APROVED', title: "Aprovado" },
  { status: 'REPROVED', title: "Reprovado" },
];

const Collumns = ({ registrations }: ContentRegistrations) => {
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
                  <RegistrationCard data={registration} key={i} />
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
