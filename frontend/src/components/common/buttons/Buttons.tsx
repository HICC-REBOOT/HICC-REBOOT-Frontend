import React from 'react';
import * as B from './Buttons.style';

interface Button {
  label: string;
  onClick: () => void;
  show: boolean;
  disabled?: boolean;
}

interface ButtonsProps {
  normal: Button;
  dangerous: Button;
}

function Buttons({ normal, dangerous }: ButtonsProps) {
  return (
    <B.Container>
      <B.NormalButton onClick={normal.onClick} $show={normal.show} disabled={normal.disabled}>
        {normal.label}
      </B.NormalButton>
      <B.DangerousButton onClick={dangerous.onClick} $show={dangerous.show} disabled={normal.disabled}>
        {dangerous.label}
      </B.DangerousButton>
    </B.Container>
  );
}

export default Buttons;
