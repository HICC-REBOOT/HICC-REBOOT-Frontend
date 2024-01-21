import React, { useEffect, useState } from 'react';
import ROUTE from '@constants/route';
import Hamburger from '@assets/image/icon/hamburger.svg';
import { NotDesktop } from '@assets/mediaQuery';
import useSidebar from '@hooks/useSidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import Previous from '@assets/image/icon/previous.svg';
import * as MH from './MobileHeader.style';

function MobileHeader() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const { changeSidebarState } = useSidebar();

  const location = useLocation();
  const [isPreviousButton, setIsPreviousButton] = useState<boolean>(false);

  const navigate = useNavigate();

  const goPreviousPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    setIsPreviousButton(location.pathname !== ROUTE.HOME);
  }, [location.pathname]);

  return (
    <NotDesktop>
      <MH.Container>
        {isPreviousButton ? <MH.PreviousButton src={Previous} onClick={goPreviousPage} /> : <MH.Logo to={ROUTE.HOME} />}
        <MH.Hamburger src={Hamburger} alt="hamburger" onClick={changeSidebarState} />
      </MH.Container>
    </NotDesktop>
  );
}

export default MobileHeader;
