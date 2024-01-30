import React from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

import ROUTE from '@constants/route';
import { Desktop } from '@assets/mediaQuery';
import useAuth from '@hooks/useAuth';
import user from '@assets/image/icon/user.svg';
import logout from '@auth/logout';
import * as H from './Header.style';

function Header() {
  const { isLogin, isAdmin, setIsLogin } = useAuth();

  const matchCalendarTab = useMatch(ROUTE.CALENDAR);
  const matchCommunityTab = useMatch(`${ROUTE.COMMUNITY.BASE}/*`);
  const matchAdminTab = useMatch(`${ROUTE.ADMIN.BASE}/*`);

  const navigate = useNavigate();

  const goLogin = () => {
    navigate(ROUTE.LOGIN);
  };

  const goProfile = () => {
    navigate(ROUTE.PROFILE.MYINFO);
  };

  const setLogout = async () => {
    await logout();
    setIsLogin(false);
    navigate(ROUTE.HOME);
  };

  const isLoginAndAdmin = isLogin && isAdmin;

  return (
    <Desktop>
      <>
        <H.Container>
          <H.LogoContainer>
            <H.Logo to={ROUTE.HOME} />
          </H.LogoContainer>
          <H.Tab to={ROUTE.CALENDAR} $active={matchCalendarTab !== null}>
            calendar
          </H.Tab>
          <H.Tab to={ROUTE.COMMUNITY.BASE} $active={matchCommunityTab !== null}>
            community
          </H.Tab>
          {isLoginAndAdmin && (
            <H.Tab to={ROUTE.ADMIN.BASE} $active={matchAdminTab !== null}>
              관리자
            </H.Tab>
          )}
          {isLogin ? <H.Auth onClick={setLogout}>Log out</H.Auth> : <H.Auth onClick={goLogin}>Log in</H.Auth>}
        </H.Container>
        {isLogin ? <H.User src={user} onClick={goProfile} /> : <H.JoinHICC to={ROUTE.SIGNUP}>Join HICC</H.JoinHICC>}
      </>
    </Desktop>
  );
}

export default Header;
