import React from 'react';
import ROUTE from '@constants/route';
import * as H from './Header.style';

function Header() {
  return (
    <H.Container>
      <H.Logo to={ROUTE.HOME} />
      <H.Tab to={ROUTE.CALENDAR}>calendar</H.Tab>
      <H.Tab to={ROUTE.COMMUNITY}>community</H.Tab>
      <H.Auth to={ROUTE.LOGIN}>Log in</H.Auth>
    </H.Container>
  );
}

export default Header;
