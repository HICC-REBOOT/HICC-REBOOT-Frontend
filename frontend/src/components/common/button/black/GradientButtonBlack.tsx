import React from 'react';
import ButtonStyle from './GradientButtonBlack.style';

interface GradientButtonBlackProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  value?: string | number | readonly string[] | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: string | React.ReactNode;
  style?: React.CSSProperties;
}

function GradientButtonBlack({ type, value, onClick, children, style }: GradientButtonBlackProps) {
  return (
    <ButtonStyle type={type} value={value} onClick={onClick} style={style}>
      {children}
    </ButtonStyle>
  );
}

export default GradientButtonBlack;
