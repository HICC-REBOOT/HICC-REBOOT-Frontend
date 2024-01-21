import React from 'react';
import { FloatButton } from 'antd';
import { ReactComponent as ScrollToTop } from '@assets/image/icon/scrollToTop.svg';
import { Mobile } from '@assets/mediaQuery';

function MoveToTheTopButton() {
  const moveToTheTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Mobile>
      <FloatButton icon={<ScrollToTop />} onClick={moveToTheTop} />
    </Mobile>
  );
}

export default MoveToTheTopButton;
