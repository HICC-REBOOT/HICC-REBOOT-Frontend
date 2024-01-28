import React from 'react';
import ROUTE from '@constants/route';
import Hamburger from '@assets/image/icon/hamburger.svg';
import { NotDesktop } from '@assets/mediaQuery';
import useSidebar from '@hooks/useSidebar';
import { useMatch, useNavigate } from 'react-router-dom';
import previous from '@assets/image/icon/previous.svg';
import user from '@assets/image/icon/accountCircle.svg';
import * as MH from './MobileHeader.style';

function MobileHeader() {
  const { changeSidebarState } = useSidebar();

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
      <MH.Container home={matchHome !== null}>
        {matchHome === null ? (
          <MH.PreviousButton src={previous} onClick={goPreviousPage} />
        ) : (
          <MH.Logo to={ROUTE.HOME} />
        )}
        <MH.RightSide>
          {matchMypage !== null && <MH.User src={user} onClick={goProfile} />}
          <MH.Hamburger src={Hamburger} alt="hamburger" onClick={changeSidebarState} />
        </MH.RightSide>
      </MH.Container>
    </NotDesktop>
  );
}

export default MobileHeader;
