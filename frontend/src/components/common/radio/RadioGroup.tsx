import React, { useState } from 'react';
import RadioType from './RadioType';
import * as R from './RadioGroup.style';
import EachOption from './EachOption';

interface RadioGroupProps {
  options: RadioType[];
  defalutOption?: RadioType;
}

function RadioGroup({ options, defalutOption }: RadioGroupProps) {
  const [currentOption, setCurrentOption] = useState<RadioType | undefined>(defalutOption);

  return (
    <R.GroupContainer>
      {options.map((option, index) => (
        <EachOption key={index} option={option} setCurrent={setCurrentOption} current={currentOption} />
      ))}
    </R.GroupContainer>
  );
}

export default RadioGroup;
