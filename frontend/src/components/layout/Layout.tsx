import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@components/common/footer/Footer';
import MoveToTheTopButton from '@components/utils/MoveToTheTopButton';
import { Mobile } from '@assets/mediaQuery';
import { Header, MobileHeader } from '@components/common/header';
import * as L from './style/Layout.style';

function Layout() {
  return (
    <L.Container>
      <Header />
      <MobileHeader />
      <Outlet />
      <Footer />
      <Mobile>
        <MoveToTheTopButton />
      </Mobile>
    </L.Container>
  );
}

export default Layout;
