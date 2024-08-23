import React from 'react';
import { DropdownIndicatorProps, components } from 'react-select';
import Magnifier from '@assets/image/icon/magnifier.svg?react';
import OptionType from './OptionType';

function DropdownIndicator(props: DropdownIndicatorProps<OptionType, false>) {
  return (
    <components.DropdownIndicator {...props}>
      <Magnifier style={{ position: 'relative', right: '1.5rem' }} />
    </components.DropdownIndicator>
  );
}

export default DropdownIndicator;
