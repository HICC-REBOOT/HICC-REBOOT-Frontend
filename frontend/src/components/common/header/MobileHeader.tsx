import React from 'react';
import ROUTE from '@constants/route';
import Hamburger from '@assets/image/icon/hamburger.svg';
import logo from '@assets/image/logo.svg';

import { NotDesktop } from '@assets/mediaQuery';
import useSidebar from '@hooks/useSidebar';
import { useMatch, useNavigate } from 'react-router-dom';
import previous from '@assets/image/icon/previous.svg';
import user from '@assets/image/icon/accountCircle.svg';
import * as MH from './style/MobileHeader.style';

function MobileHeader() {
  const { openSidebar } = useSidebar();

  const navigate = useNavigate();

  const goPreviousPage = () => {
    navigate(-1);
  };

  const goProfile = () => {
    navigate(ROUTE.PROFILE.MYINFO);
  };

  const matchHome = useMatch(ROUTE.HOME);
  const matchMypage = useMatch(`${ROUTE.PROFILE.BASE}/*`);

  return (
    <NotDesktop>
      <>
        <MH.Container $home={matchHome !== null}>
          {matchHome === null ? (
            <MH.PreviousButton src={previous} onClick={goPreviousPage} />
          ) : (
            <MH.LogoImage src={logo} alt="logo" onClick={() => navigate(ROUTE.HOME)} />
          )}
          <MH.RightSide>
            {matchMypage !== null && <MH.User src={user} onClick={goProfile} />}
            <MH.Hamburger src={Hamburger} alt="hamburger" onClick={openSidebar} />
          </MH.RightSide>
        </MH.Container>
        <MH.HeaderTopMargin />
      </>
    </NotDesktop>
  );
}

export default MobileHeader;
