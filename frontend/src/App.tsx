import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import ROUTE from '@constants/route';
import Calendar from '@pages/Calendar';
import Home from '@pages/Home';
import MyPage from '@pages/MyPage';
import { MyWritings, MyComments } from '@components/mypage';
import MyInfomation from '@pages/MyInfo';
import Temp from '@pages/temp/Temp';
import { Temp1, Temp2, Temp3 } from '@components/Temp';

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
        <Route path={ROUTE.PROFILE.MYINFO} element={<MyInfomation />} />
        <Route path={ROUTE.PROFILE.BASE} element={<MyPage />}>
          <Route path={ROUTE.PROFILE.MYWRITINGS} element={<MyWritings />} />
          <Route path={ROUTE.PROFILE.MYCOMMENTS} element={<MyComments />} />
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
