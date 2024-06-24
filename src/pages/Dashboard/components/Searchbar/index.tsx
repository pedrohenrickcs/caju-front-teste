import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { IconButton } from "~/components/common/Buttons/IconButton";
import Button from "~/components/common/Buttons";
import CpfMaskedTextField from "~/components/common/CpfTextField";
import routes from "~/router/routes";
import * as S from "./styles";
import { getRegistrations, refetchRegistrations } from "~/services/registrations";
import { ChangeEvent, useState } from "react";
import Loading from "../Loading";
export const SearchBar = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const handleRefetch = async () => {
    setIsLoading(true);
    try {
      await refetchRegistrations();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCpf = async (event: ChangeEvent<HTMLInputElement>) => {
    const cpf = event.target.value;
    return getRegistrations(cpf)
  };

  if (isLoading) return <Loading />
  
  return (
    <S.Container>
      <CpfMaskedTextField onChange={getCpf} />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={handleRefetch}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
