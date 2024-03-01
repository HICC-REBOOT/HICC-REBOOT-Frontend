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

function SmallActivityBox({ img, title, content }: BoxProps) {
  const [active, setActive] = useReducer((prev: boolean) => !prev, false);
  return (
    <B.SmallBox onMouseEnter={setActive} onMouseLeave={setActive}>
      <B.SmallBoxImage src={img} initial="inactive" animate={active ? 'active' : 'inactive'} variants={variants} />
      <B.BoxFilter filter={active ? 'active' : 'inactive'}></B.BoxFilter>
      <B.SmallBoxTitle>{title}</B.SmallBoxTitle>
      <B.BoxContent>{content}</B.BoxContent>
    </B.SmallBox>
  );
}

export default SmallActivityBox;
