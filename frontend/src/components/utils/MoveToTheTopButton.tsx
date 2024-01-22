import React from 'react';
import { FloatButton } from 'antd';
import { ReactComponent as ScrollToTop } from '@assets/image/icon/scrollToTop.svg';
import { Mobile } from '@assets/mediaQuery';
import { useMatch } from 'react-router-dom';
import ROUTE from '@constants/route';

function MoveToTheTopButton() {
  const moveToTheTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 메인이 아닐 경우에는 보이지 않도록 설정
  const matchCommunityList = useMatch(ROUTE.HOME);

  return (
    <Mobile>
      <FloatButton
        icon={<ScrollToTop />}
        onClick={moveToTheTop}
        style={{ display: matchCommunityList !== null ? 'block' : 'none' }}
      />
    </Mobile>
  );
}

export default MoveToTheTopButton;
