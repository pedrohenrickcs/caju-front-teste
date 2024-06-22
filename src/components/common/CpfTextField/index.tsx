import { InputHTMLAttributes } from "react";
import * as S from "./styles";

type Props = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<any>;

const CpfMaskedTextField = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <S.Input mask="999.999.999-99" placeholder="Digite um CPF válido" />
      <span style={{fontSize: 12, color: '#ff0000'}}>{props.error}</span>
    </div>
  );
};

export default CpfMaskedTextField;