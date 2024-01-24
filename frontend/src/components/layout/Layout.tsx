import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useSidebar from '@hooks/useSidebar';

import { Header, MobileHeader } from '@components/common/header';
import Sidebar from '@components/common/sidebar/Sidebar';
import MoveToTheTopButton from '@components/utils/moveToTheTopButton/MoveToTheTopButton';

import Loading from '@components/common/loading/Loading';
import Footer from '@components/common/footer/Footer';
import * as L from './style/Layout.style';

function Layout() {
  const { isSidebarOpen, changeSidebarState } = useSidebar();

  return (
    <L.Container>
      <Suspense fallback={<Loading />}>
        <AnimatePresence>{isSidebarOpen && <Sidebar close={changeSidebarState} />}</AnimatePresence>
        <Header />
        <MobileHeader />
        <Outlet />
        <Footer />
        <MoveToTheTopButton />
      </Suspense>
    </L.Container>
  );
}

export default Layout;
