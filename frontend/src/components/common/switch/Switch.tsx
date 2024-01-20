import React, { useReducer } from 'react';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
  active: { cx: 28, transition: { duration: 0.2 } },
  inactive: { cx: 12, transition: { duration: 0.2 } },
};

function Switch() {
  const [active, setActive] = useReducer((prev: boolean) => !prev, false);

  const colorByState = () => {
    if (active) {
      return '#1DC9A0';
    }

    return '#D1D1D6';
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
