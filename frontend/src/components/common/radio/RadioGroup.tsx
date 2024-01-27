import React from 'react';
import RadioType from './RadioType';
import * as R from './RadioGroup.style';
import EachOption from './EachOption';

interface RadioGroupProps {
  options: RadioType[];
  currentOption: RadioType | undefined;
  setCurrentOption: React.Dispatch<React.SetStateAction<RadioType | undefined>>;
}

function RadioGroup({ options, currentOption, setCurrentOption }: RadioGroupProps) {
  return (
    <R.GroupContainer>
      {options.map((option, index) => (
        <EachOption key={index} option={option} currentOption={currentOption} setCurrentOption={setCurrentOption} />
      ))}
    </R.GroupContainer>
  );
}

export default RadioGroup;
