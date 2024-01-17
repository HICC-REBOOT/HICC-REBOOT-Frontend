import React from 'react';
import { FloatButton } from 'antd';
import ArrowUp from '@assets/image/arrowUp.svg';

function MoveToTheTopButton() {
  const moveToTheTop = () => {};
  return <FloatButton icon={<img src={ArrowUp} alt="up" />} onClick={moveToTheTop} />;
}

export default MoveToTheTopButton;
