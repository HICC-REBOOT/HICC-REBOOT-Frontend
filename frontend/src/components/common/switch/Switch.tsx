import React from 'react';
import { motion, Variants } from 'framer-motion';
import theme from '@styles/theme';

const variants: Variants = {
  active: { cx: 28, transition: { duration: 0.2 } },
  inactive: { cx: 12, transition: { duration: 0.2 } },
};

interface SwitchProps {
  active: boolean;
  setActive: React.DispatchWithoutAction;
}

function Switch({ active, setActive }: SwitchProps) {
  const colorByState = () => {
    if (active) {
      return theme.colors.point1;
    }

    return theme.colors.grey004;
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="4rem"
      height="2.4rem"
      viewBox="0 0 40 24"
      fill="none"
      onClick={setActive}
    >
      <rect width="40" height="24" rx="12" fill={colorByState()} />
      <motion.circle
        cy="12"
        r="10"
        initial="inactive"
        animate={active ? 'active' : 'inactive'}
        variants={variants}
        fill="white"
      />
    </motion.svg>
  );
}

export default Switch;
