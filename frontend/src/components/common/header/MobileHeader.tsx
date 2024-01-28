import React from 'react';
import ROUTE from '@constants/route';
import Hamburger from '@assets/image/icon/hamburger.svg';
import { NotDesktop } from '@assets/mediaQuery';
import useSidebar from '@hooks/useSidebar';
import { useMatch, useNavigate } from 'react-router-dom';
import Previous from '@assets/image/icon/previous.svg';
import * as MH from './MobileHeader.style';

function MobileHeader() {
  const { changeSidebarState } = useSidebar();

  const navigate = useNavigate();

  const goPreviousPage = () => {
    navigate(-1);
  };

  const matchHome = useMatch(ROUTE.HOME);

  return (
    <NotDesktop>
      <MH.Container>
        {matchHome === null ? (
          <MH.PreviousButton src={Previous} onClick={goPreviousPage} />
        ) : (
          <MH.Logo to={ROUTE.HOME} />
        )}
        <MH.Hamburger src={Hamburger} alt="hamburger" onClick={changeSidebarState} />
      </MH.Container>
    </NotDesktop>
  );
}

export default MobileHeader;
