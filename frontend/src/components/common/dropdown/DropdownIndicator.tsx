import React from 'react';
import { DropdownIndicatorProps, components } from 'react-select';
import arrow from '@assets/image/icon/arrow.svg';
import { Variants } from 'framer-motion';
import OptionType from './OptionType';
import Arrow from './Arrow.style';

const variants: Variants = {
  inactive: {
    transform: 'rotate(0deg)',
    transition: { duration: 0.2 },
  },
  active: {
    transform: 'rotate(180deg)',
    transition: { duration: 0.2 },
  },
};

function DropdownIndicator(props: DropdownIndicatorProps<OptionType, false>) {
  return (
    <components.DropdownIndicator {...props}>
      <Arrow
        src={arrow}
        alt="arrow"
        initial="inactive"
        animate={props.selectProps.menuIsOpen ? 'active' : 'inactive'}
        variants={variants}
      />
    </components.DropdownIndicator>
  );
}

export default DropdownIndicator;
