import React from 'react';
import { FloatButton } from 'antd';
import ArrowUp from '@assets/image/icon/arrowUp.svg';

function MoveToTheTopButton() {
  const moveToTheTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <FloatButton icon={<img src={ArrowUp} alt="up" />} onClick={moveToTheTop} />;
}

export default MoveToTheTopButton;
