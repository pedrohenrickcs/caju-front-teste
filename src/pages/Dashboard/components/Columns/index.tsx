import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import { ContentRegistrations } from "~/types/Registrations";
import { CollumnsProps, ColumnProps } from "~/types/RegistrationCard";
import { StatusEnum } from "~/enums/StatusEnum";


const allColumns: ColumnProps[] = [
  { status: StatusEnum.Review, title: "Pronto para revisar" },
  { status: StatusEnum.Approved, title: "Aprovado" },
  { status: StatusEnum.Reproved, title: "Reprovado" },
];

const Collumns: React.FC<CollumnsProps> = ({ updateData, filteredRegistrations }: ContentRegistrations) => {
  return (
    <S.Container>
      {allColumns.map((collum) => {
        const columnRegistrations = filteredRegistrations?.filter(
          (registration) => registration.status === collum.status
        );

        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>{collum.title}</S.TitleColumn>
              <S.CollumContent>
                {columnRegistrations?.map((registration, i) => (
                  <RegistrationCard
                    data={registration}
                    key={i}
                    updateData={updateData}
                  />
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
