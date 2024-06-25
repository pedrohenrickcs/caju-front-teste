import * as S from './styles';
import Button from '~/components/common/Buttons';
import routes from '~/router/routes';
import Loading from '../Loading';

import { CpfMaskedTextField } from '~/components/common/CpfTextField';
import { HiRefresh } from 'react-icons/hi';
import { IconButton } from '~/components/common/Buttons/IconButton';
import { useHistory } from 'react-router-dom';
import { useRefetchRegistrations } from '~/hooks/useRefetchRegistrations';

export const SearchBar = () => {
  const history = useHistory();
  const { isLoading, refetchRegistration } = useRefetchRegistrations();
  // const [cpf, setCpf] = useState('');

  // useDebounceEffect(() => {
  //   if (cpf) {
  //     // Aqui você pode chamar a função de busca na API
  //     // api.getSearchRegistrations();
  //   }
  // }, 500, [cpf]);

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const handleInputChange = async () => {
    // const cpf = event.target.value;
    // setCpf(cpf);
    console.log('change');
    
  };

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <CpfMaskedTextField placeholder="Digite um CPF válido" onChange={handleInputChange} />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={refetchRegistration}>
          <HiRefresh />
        </IconButton>
        <Button onClick={goToNewAdmissionPage}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
