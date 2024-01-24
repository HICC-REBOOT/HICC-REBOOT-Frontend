import React from 'react';
import { DropdownIndicatorProps, components } from 'react-select';
import Arrow from '@assets/image/icon/arrow.svg';
import { motion, Variants } from 'framer-motion';
import OptionType from './OptionType';

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
      <motion.img
        src={Arrow}
        alt="arrow"
        initial="inactive"
        animate={props.selectProps.menuIsOpen ? 'active' : 'inactive'}
        variants={variants}
      />
    </components.DropdownIndicator>
  );
}

export default DropdownIndicator;
