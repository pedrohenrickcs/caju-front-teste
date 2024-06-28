import * as S from './styles';
import Button from '~/components/common/Buttons';
import routes from '~/router/routes';
import Loading from '../Loading';

import { CpfMaskedTextField } from '~/components/common/CpfTextField';
import { HiRefresh } from 'react-icons/hi';
import { IconButton } from '~/components/common/Buttons/IconButton';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDebounce } from '~/hooks/useDebounce';

export const SearchBar = ({ updateData, isLoading, onSearch }: any) => {
  const history = useHistory();
  const [cpf, setCpf] = useState('');
  const debouncedCpf = useDebounce(cpf, 500);

  useEffect(() => {
    if (debouncedCpf) {
      onSearch(debouncedCpf);
    }
  }, [debouncedCpf, onSearch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <CpfMaskedTextField placeholder="Digite um CPF válido" onChange={handleInputChange} />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={updateData}>
          <HiRefresh />
        </IconButton>
        <Button onClick={goToNewAdmissionPage}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
