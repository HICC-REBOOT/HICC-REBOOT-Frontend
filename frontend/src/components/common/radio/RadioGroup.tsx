import React from 'react';
import RadioType from './RadioType';
import * as R from './RadioGroup.style';
import EachOption from './EachOption';

interface RadioGroupProps {
  options: RadioType[];
}

function RadioGroup({ options }: RadioGroupProps) {
  return (
    <R.GroupContainer>
      {options.map((option, index) => (
        <EachOption key={index} option={option} />
      ))}
    </R.GroupContainer>
  );
}

export default RadioGroup;
