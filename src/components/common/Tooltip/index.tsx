import * as S from "./styles";

export const StatusTooltip = ({ children, text }: any) => (
  <S.Tooltip>
    {children}
    <S.TooltipText className="tooltip-text">{text}</S.TooltipText>
  </S.Tooltip>
);