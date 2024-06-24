import { ChangeEventHandler, InputHTMLAttributes } from "react";
import * as S from "./styles";

type PropsCpf = {
  label?: string;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & InputHTMLAttributes<any>;

const CpfMaskedTextField = ({ id, label, onChange, error }: PropsCpf) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <S.Input mask="999.999.999-99" placeholder="Digite um CPF válido" onChange={onChange} />
      <span style={{fontSize: 12, color: '#ff0000'}}>{error}</span>
    </div>
  );
};

export default CpfMaskedTextField;