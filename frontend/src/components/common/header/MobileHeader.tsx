import React, { useState } from 'react';
import ROUTE from '@constants/route';
import Hamburger from '@assets/image/icon/hamburger.svg';
import { NotDesktop } from '@assets/mediaQuery';
import * as MH from './MobileHeader.style';

function MobileHeader() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <NotDesktop>
      <MH.Container>
        <MH.Logo to={ROUTE.HOME} />
        <MH.Hamburger src={Hamburger} alt="hamburger" />
      </MH.Container>
    </NotDesktop>
  );
}

export default MobileHeader;
