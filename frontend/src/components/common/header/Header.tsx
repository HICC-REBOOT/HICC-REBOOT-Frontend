import React, { useState } from 'react';
import ROUTE from '@constants/route';
import { useNavigate } from 'react-router-dom';
import * as H from './Header.style';

function Header() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const navigate = useNavigate();

  const goLogin = () => {
    navigate(ROUTE.LOGIN);
  };

  const logout = async () => {
    // logout
    navigate(ROUTE.HOME);
  };

  return (
    <H.Container>
      <H.Logo to={ROUTE.HOME} />
      <H.Tab to={ROUTE.CALENDAR}>calendar</H.Tab>
      <H.Tab to={ROUTE.COMMUNITY}>community</H.Tab>
      {isLogin ? <H.Auth onClick={logout}>Log out</H.Auth> : <H.Auth onClick={goLogin}>Log in</H.Auth>}
    </H.Container>
  );
}

export default Header;
