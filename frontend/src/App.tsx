import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import Calendar from '@pages/Calendar';
import Home from '@pages/Home';
import ROUTE from '@constants/route';
import Temp from '@pages/temp/Temp';
import { Temp1, Temp2, Temp3 } from '@components/Temp';
import Community from '@pages/community/Community';
import { CommunityList } from '@components/community';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.CALENDAR} element={<Calendar />} />
        <Route path={ROUTE.COMMUNITY.BASE} element={<Community />}>
          <Route path={ROUTE.COMMUNITY.LIST} element={<CommunityList />} />
        </Route>
        <Route path="/temp" element={<Temp />}>
          <Route path="apple" element={<Temp1 />} />
          <Route path="banana" element={<Temp2 />} />
          <Route path="mango" element={<Temp3 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
