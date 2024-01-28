import React, { useEffect, useState } from 'react';
import Radio from '@assets/image/icon/Radio';
import RadioType from './RadioType';

import * as R from './RadioGroup.style';

interface EachOptionProps {
  option: RadioType;
  currentOption: RadioType | undefined;
  setCurrentOption: React.Dispatch<React.SetStateAction<RadioType | undefined>>;
}

function EachOption({ option, currentOption, setCurrentOption }: EachOptionProps) {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(currentOption?.value === option.value);
  }, [currentOption, option.value]);

  const onClick = () => {
    if (!option.disabled) {
      setCurrentOption(option);
    }
  };

  return (
    <R.Option>
      <R.Tag>{option.tag}</R.Tag>
      <R.LabelContainer>
        <R.Label disabled={option.disabled}>{option.label}</R.Label>
        {option.warning !== undefined && <R.Warning>{option.warning}</R.Warning>}
      </R.LabelContainer>
      <Radio disabled={option.disabled} checked={checked} onClick={onClick} />
    </R.Option>
  );
}

export default EachOption;
