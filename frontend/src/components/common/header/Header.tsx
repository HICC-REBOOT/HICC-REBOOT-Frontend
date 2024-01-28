import React, { useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

import ROUTE from '@constants/route';
import { Desktop } from '@assets/mediaQuery';
import useAuth from '@hooks/useAuth';
import user from '@assets/image/icon/user.svg';
import * as H from './Header.style';

function Header() {
  const { isLogin } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const matchCalendarTab = useMatch(ROUTE.CALENDAR);
  const matchCommunityTab = useMatch(`${ROUTE.COMMUNITY}/*`);
  const matchAdminTab = useMatch(`${ROUTE.ADMIN}/*`);

  const navigate = useNavigate();

  const goLogin = () => {
    navigate(ROUTE.LOGIN);
  };

  const goProfile = () => {
    navigate(ROUTE.PROFILE.BASE);
  };

  const logout = async () => {
    // logout
    navigate(ROUTE.HOME);
  };

  return (
    <Desktop>
      <>
        <H.Container>
          <H.LogoContainer to={ROUTE.HOME}>
            <H.Logo to={ROUTE.HOME} />
          </H.LogoContainer>
          <H.Tab to={ROUTE.CALENDAR} active={matchCalendarTab !== null}>
            calendar
          </H.Tab>
          <H.Tab to={ROUTE.COMMUNITY.BASE} active={matchCommunityTab !== null}>
            community
          </H.Tab>
          {isAdmin && (
            <H.Tab to={ROUTE.ADMIN.BASE} active={matchAdminTab !== null}>
              관리자
            </H.Tab>
          )}
          {isLogin ? <H.Auth onClick={logout}>Log out</H.Auth> : <H.Auth onClick={goLogin}>Log in</H.Auth>}
        </H.Container>
        {isLogin ? <H.User src={user} onClick={goProfile} /> : <H.JoinHICC to={ROUTE.SIGNUP}>Join HICC</H.JoinHICC>}
      </>
    </Desktop>
  );
}

export default Header;
