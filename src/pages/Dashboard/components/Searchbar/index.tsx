import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { IconButton } from "~/components/common/Buttons/IconButton";
import Button from "~/components/common/Buttons";
import CpfMaskedTextField from "~/components/common/CpfTextField";
import routes from "~/router/routes";
import * as S from "./styles";
export const SearchBar = () => {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };
  
  return (
    <S.Container>
      <CpfMaskedTextField />
      <S.Actions>
        <IconButton aria-label="refetch">
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
