import React from 'react';
import Radio from '@assets/image/icon/Radio';
import RadioType from './RadioType';

import * as R from './RadioGroup.style';

interface EachOptionProps {
  option: RadioType;
  current?: RadioType;
  setCurrent: React.Dispatch<React.SetStateAction<RadioType | undefined>>;
}

function EachOption({ option, current, setCurrent }: EachOptionProps) {
  const onClick = () => {
    if (!option.disabled) setCurrent(option);
  };

  return (
    <R.Option>
      <R.Tag>{option.tag}</R.Tag>
      <R.Label disabled={option.disabled}>{option.label}</R.Label>
      <Radio disabled={option.disabled} checked={current === option} onClick={onClick} />
    </R.Option>
  );
}

export default EachOption;
