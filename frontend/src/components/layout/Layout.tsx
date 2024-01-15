import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/common/header/Header';
import * as L from './style/Layout.style';

function Layout() {
  return (
    <L.Container>
      <Header />
      <Outlet />
    </L.Container>
  );
}

export default Layout;
