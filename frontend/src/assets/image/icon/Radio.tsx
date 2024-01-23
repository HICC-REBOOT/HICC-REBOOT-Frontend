import React from 'react';
import theme from '@styles/theme';

interface RadioProps {
  disabled: boolean;
  checked: boolean;
  onClick: () => void;
}

function Radio({ disabled, checked, onClick }: RadioProps) {
  const setColorByCondition = () => {
    if (disabled) {
      return theme.colors.grey002;
    }

    if (checked) {
      return theme.colors.point2;
    }

    return theme.colors.white;
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 20 20"
      fill="none"
      onClick={onClick}
    >
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
        fill={setColorByCondition()}
      />
      {!disabled && (
        <path
          display={checked ? 'initial' : 'none'}
          d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
          fill={setColorByCondition()}
        />
      )}
    </svg>
  );
}

export default Radio;
