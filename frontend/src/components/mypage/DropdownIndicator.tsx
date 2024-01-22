import React from 'react';
import { DropdownIndicatorProps, components } from 'react-select';
import { ReactComponent as Magnifier } from '@assets/image/icon/magnifier.svg';
import OptionType from './OptionType';

function DropdownIndicator(props: DropdownIndicatorProps<OptionType, false>) {
  return (
    <components.DropdownIndicator {...props}>
      <Magnifier style={{ position: 'relative', right: '1.5rem' }}></Magnifier>
    </components.DropdownIndicator>
  );
}

export default DropdownIndicator;
