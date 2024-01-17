import React from 'react';
import { FloatButton } from 'antd';
import ArrowUp from '@assets/image/icon/arrowUp.svg';
import { Mobile } from '@assets/mediaQuery';

function MoveToTheTopButton() {
  const moveToTheTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Mobile>
      <FloatButton icon={<img src={ArrowUp} alt="up" />} onClick={moveToTheTop} />
    </Mobile>
  );
}

export default MoveToTheTopButton;
