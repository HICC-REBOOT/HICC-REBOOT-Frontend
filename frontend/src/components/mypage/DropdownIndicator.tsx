import React from 'react';
import { DropdownIndicatorProps, components } from 'react-select';
import { ReactComponent as Arrow } from '@assets/image/icon/arrowDown.svg';
import OptionType from './OptionType';

function DropdownIndicator(props: DropdownIndicatorProps<OptionType, false>) {
  return (
    <components.DropdownIndicator {...props}>
      <Arrow
        style={{
          transform: props.selectProps.menuIsOpen ? 'rotate(0deg)' : 'rotate(180deg)',
        }}
      ></Arrow>
    </components.DropdownIndicator>
  );
}

export default DropdownIndicator;
