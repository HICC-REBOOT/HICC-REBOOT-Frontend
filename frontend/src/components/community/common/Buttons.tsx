import React from 'react';
import * as B from './Buttons.style';

interface Button {
  label: string;
  onClick: () => void;
}

interface ButtonsProps {
  normal: Button;
  dangerous: Button;
}

function Buttons({ normal, dangerous }: ButtonsProps) {
  return (
    <B.Container>
      <B.NormalButton onClick={normal.onClick}>{normal.label}</B.NormalButton>
      <B.DangerousButton onClick={dangerous.onClick}>{dangerous.label}</B.DangerousButton>
    </B.Container>
  );
}

export default Buttons;
