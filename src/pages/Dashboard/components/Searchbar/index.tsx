import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { IconButton } from "~/components/common/Buttons/IconButton";
import Button from "~/components/common/Buttons";
import CpfMaskedTextField from "~/components/common/CpfTextField";
import routes from "~/router/routes";
import * as S from "./styles";
import { getSearchRegistrations, refetchRegistrations } from "~/services/registrations";
import { ChangeEvent, useEffect, useState } from "react";
import Loading from "../Loading";
export const SearchBar = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (cpf) {
        getSearchRegistrations();
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [cpf])


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

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const cpf = event.target.value;
    setCpf(cpf)
  };

  if (isLoading) return <Loading />
  
  return (
    <S.Container>
      <CpfMaskedTextField onChange={handleInputChange} />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={handleRefetch}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
