import * as S from "./styles";
import Button from "~/components/common/Buttons";
import CpfMaskedTextField from "~/components/common/CpfTextField";
import routes from "~/router/routes";
import Loading from "../Loading";

import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { IconButton } from "~/components/common/Buttons/IconButton";
import { ChangeEvent, useEffect, useState } from "react";
import { api } from "~/services";

export const SearchBar = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (cpf) {
        // api.getSearchRegistrations();
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
      await api.refetchRegistrations();
      window.location.reload();
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
      <CpfMaskedTextField placeholder="Digite um CPF válido" onChange={handleInputChange} />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={handleRefetch}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
