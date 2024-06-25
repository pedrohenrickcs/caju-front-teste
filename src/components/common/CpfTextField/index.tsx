import { ChangeEventHandler, InputHTMLAttributes, forwardRef } from "react";
import * as S from "./styles";

type PropsCpf = {
  label?: string;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & InputHTMLAttributes<any>;

const CpfMaskedTextField = forwardRef<HTMLInputElement, PropsCpf>(
  ({ label, onChange, error, type, placeholder, ...rest }, ref) => (
    <>
      <label>{label}</label>
      <S.Input mask="999.999.999-99" ref={ref} type={type} placeholder={placeholder} onChange={onChange} {...rest} />
      <p style={{ fontSize: 12, color: 'red' }}>{error}</p>
    </>
  )
)

export default CpfMaskedTextField;