import React from 'react';
import ButtonStyle from './GradientButton.style';

interface GradientButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  value?: string | number | readonly string[] | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: string | React.ReactNode;
  style?: React.CSSProperties;
}

function GradientButton({ type, value, onClick, children, style }: GradientButtonProps) {
  return (
    <ButtonStyle type={type} value={value} onClick={onClick} style={style}>
      {children}
    </ButtonStyle>
  );
}

export default GradientButton;
