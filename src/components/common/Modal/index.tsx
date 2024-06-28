import { ModalProps } from "~/types/Modal";
import { ButtonSmall } from "../Buttons";
import * as S from "./styles";

export const ModalDialog = ({ show, onClose, onConfirm, title, message }: ModalProps) => {
  return (
    <S.ModalBackground show={show}>
      <S.ModalWrapper>
        <S.ModalHeader>{title}</S.ModalHeader>
        <S.ModalBody>{message}</S.ModalBody>
        <S.ModalFooter>
          <ButtonSmall bgcolor="#ff919a" onClick={onClose}>Cancelar</ButtonSmall>
          <ButtonSmall bgcolor="#9be59b" onClick={onConfirm}>Confirmar</ButtonSmall>
        </S.ModalFooter>
      </S.ModalWrapper>
    </S.ModalBackground>
  );
};