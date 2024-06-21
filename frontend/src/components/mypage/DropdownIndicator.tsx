import React from 'react';
import { DropdownIndicatorProps, components } from 'react-select';
import Magnifier from '@assets/image/icon/magnifier.svg';
import OptionType from './OptionType';

function DropdownIndicator(props: DropdownIndicatorProps<OptionType, false>) {
  return (
    <components.DropdownIndicator {...props}>
      <img src={Magnifier} alt="" style={{ position: 'relative', right: '1.5rem' }} />
    </components.DropdownIndicator>
  );
}

export default DropdownIndicator;
