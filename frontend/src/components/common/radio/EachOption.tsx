import React from 'react';
import Radio from '@assets/image/icon/Radio';
import useRadio from '@hooks/useRadio';
import RadioType from './RadioType';

import * as R from './RadioGroup.style';

interface EachOptionProps {
  option: RadioType;
}

function EachOption({ option }: EachOptionProps) {
  const { currentOption, selectOption } = useRadio(undefined);
  return (
    <R.Option>
      <R.Tag>{option.tag}</R.Tag>
      <R.Label disabled={option.disabled}>{option.label}</R.Label>
      <Radio
        disabled={option.disabled}
        checked={currentOption?.value === option.value}
        onClick={() => selectOption(option)}
      />
    </R.Option>
  );
}

export default EachOption;
