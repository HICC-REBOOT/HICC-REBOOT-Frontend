import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import ROUTE from '@constants/route';
import Admin from '@pages/Admin/Admin';
import Home from '@pages/Home';
import Calendar from '@pages/Calendar';
import Community from '@pages/community/Community';
import Temp from '@pages/temp/Temp';

import { ArticleDetail, CommunityList, CommunityWrite } from '@components/community';
import { Approval, ChangeGrade, MemberInfo } from '@components/admin';
import { Temp1, Temp2, Temp3 } from '@components/Temp';
import NotFound from '@components/common/error/NotFound';
import confirm from '@components/common/popup/confirm/Confirm';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  confirm({
    content: 'd',
    okText: 'd',
    cancelText: 't',
    isDangerous: false,
    onOk: () => console.log('d'),
  });

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTE.ADMIN.BASE} element={<Admin />}>
          <Route path={ROUTE.ADMIN.APPROVAL} element={<Approval />} />
          <Route path={ROUTE.ADMIN.INFO} element={<MemberInfo />} />
          <Route path={ROUTE.ADMIN.CHANGE} element={<ChangeGrade />} />
        </Route>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.CALENDAR} element={<Calendar />} />
        <Route path={ROUTE.COMMUNITY.BASE} element={<Community />}>
          <Route path={ROUTE.COMMUNITY.LIST} element={<CommunityList />} />
          <Route path={ROUTE.COMMUNITY.WRITE} element={<CommunityWrite />} />
          <Route path={ROUTE.COMMUNITY.DETAIL} element={<ArticleDetail />} />
          <Route path={ROUTE.COMMUNITY.NOT_FOUND} element={<NotFound />} />
        </Route>
        <Route path={ROUTE.TEMP.BASE} element={<Temp />}>
          <Route path={ROUTE.TEMP.APPLE} element={<Temp1 />} />
          <Route path={ROUTE.TEMP.BANANA} element={<Temp2 />} />
          <Route path={ROUTE.TEMP.MANGO} element={<Temp3 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
