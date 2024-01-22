import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useSidebar from '@hooks/useSidebar';

import { Header, MobileHeader } from '@components/common/header';
import Footer from '@components/common/footer/Footer';
import Sidebar from '@components/common/sidebar/Sidebar';
import MoveToTheTopButton from '@components/utils/moveToTheTopButton/MoveToTheTopButton';

import * as L from './style/Layout.style';

function Layout() {
  const { isSidebarOpen, changeSidebarState } = useSidebar();

  return (
    <L.Container>
      <AnimatePresence>{isSidebarOpen && <Sidebar close={changeSidebarState} />}</AnimatePresence>
      <Header />
      <MobileHeader />
      <Outlet />
      <Footer />
      <MoveToTheTopButton />
    </L.Container>
  );
}

export default Layout;
