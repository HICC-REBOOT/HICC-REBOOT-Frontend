import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/common/header/Header';
import Footer from '@components/common/footer/Footer';
import MoveToTheTopButton from '@components/utils/MoveToTheTopButton';
import * as L from './style/Layout.style';

function Layout() {
  return (
    <L.Container>
      <Header />
      <Outlet />
      <Footer />
      <MoveToTheTopButton />
    </L.Container>
  );
}

export default Layout;
