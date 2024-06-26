import { ChangeEventHandler, InputHTMLAttributes, forwardRef } from "react";
import * as S from "./styles";

type PropsCpf = {
  label?: string;
  error?: string;
  mask?: string;
  ref?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & InputHTMLAttributes<any>;

export const CpfMaskedTextField = forwardRef<HTMLInputElement, PropsCpf>(
  ({ label, onChange, error, type, placeholder, ...rest }, ref) => (
    <div>
      <label>{label}</label>
      <S.Input mask="999.999.999-99" ref={ref} type={type} placeholder={placeholder} onChange={onChange} {...rest} />
      <p style={{ fontSize: 12, color: 'red' }}>{error}</p>
    </div>
  )
)