import React, { useReducer } from 'react';
import { Variants } from 'framer-motion';
import * as B from './ActivityBox.style';

interface BoxProps {
  img: string;
  title: string;
  content: string;
}

const variants: Variants = {
  active: { scale: 1.2, transition: { duration: 0.2 } },
  inactive: { scale: 1, transition: { duration: 0.2 } },
};

function ActivityBox({ img, title, content }: BoxProps) {
  const [active, setActive] = useReducer((prev: boolean) => !prev, false);
  return (
    <B.Box onMouseEnter={setActive} onMouseLeave={setActive}>
      <B.BoxImage src={img} initial="inactive" animate={active ? 'active' : 'inactive'} variants={variants} />
      <B.BoxFilter filter={active ? 'active' : 'inactive'}></B.BoxFilter>
      <B.BoxTitle>{title}</B.BoxTitle>
      <B.BoxContent>{content}</B.BoxContent>
    </B.Box>
  );
}

export default ActivityBox;
