import React from 'react';
import ButtonStyle from './GradientButton.style';

interface GradientButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.FormEventHandler<HTMLButtonElement> | undefined;
  children: string | React.ReactNode;
  style?: React.CSSProperties;
}

function GradientButton({ type, value, onChange, children, style }: GradientButtonProps) {
  return (
    <ButtonStyle type={type} value={value} onChange={onChange} style={style}>
      {children}
    </ButtonStyle>
  );
}

export default GradientButton;
