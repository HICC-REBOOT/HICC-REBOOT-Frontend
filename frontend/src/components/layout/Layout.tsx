import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/common/header/Header';
import Footer from '@components/common/footer/Footer';
import * as L from './style/Layout.style';

function Layout() {
  return (
    <L.Container>
      <Header />
      <Outlet />
      <Footer />
    </L.Container>
  );
}

export default Layout;
