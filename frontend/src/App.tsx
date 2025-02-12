import React, { useEffect } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import ROUTE from '@constants/route';
import Admin from '@pages/Admin/Admin';
import Home from '@pages/Home';
import Calendar from '@pages/Calendar';
import Community from '@pages/community/Community';
import MyPage from '@pages/MyPage';
import MyInfomation from '@pages/MyInfo';

import { MyWritings, MyComments } from '@components/mypage';
import { Login, SignUp, ChangePassword, ResetPassword, EnterInfo } from '@pages/auth';
import { ArticleDetail, CommunityList, CommunityUpdate, CommunityWrite } from '@components/community';
import { Approval, ChangeGrade, MemberInfo } from '@components/admin';
import NotFound from '@components/common/error/NotFound';
import CommunityAdmin from '@components/admin/Community/CommunityAdmin';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<Layout />}>
        {/* admin */}
        <Route path={ROUTE.ADMIN.BASE} element={<Admin />}>
          <Route path={ROUTE.ADMIN.APPROVAL} element={<Approval />} />
          <Route path={ROUTE.ADMIN.INFO} element={<MemberInfo />} />
          <Route path={ROUTE.ADMIN.CHANGE} element={<ChangeGrade />} />
          <Route path={ROUTE.ADMIN.COMMUNITY} element={<CommunityAdmin />} />
        </Route>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.CALENDAR} element={<Calendar />} />
        {/* auth */}
        <Route path={ROUTE.SIGNUP} element={<SignUp />} />
        <Route path={ROUTE.ENTERINFO} element={<EnterInfo />} />
        <Route path={ROUTE.LOGIN} element={<Login />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={ROUTE.RESET_PASSWORD_AFTER_EMAIL_VERIFY} element={<ChangePassword />} />
        {/* community */}
        <Route path={ROUTE.COMMUNITY.BASE} element={<Community />}>
          <Route path={ROUTE.COMMUNITY.LIST} element={<CommunityList />} />
          <Route path={ROUTE.COMMUNITY.WRITE} element={<CommunityWrite />} />
          <Route path={ROUTE.COMMUNITY.DETAIL} element={<ArticleDetail />} />
          <Route path={ROUTE.COMMUNITY.UPDATE} element={<CommunityUpdate />} />
          <Route path={ROUTE.COMMUNITY.NOT_FOUND} element={<NotFound />} />
        </Route>
        <Route path={ROUTE.PROFILE.MYINFO} element={<MyInfomation />} />
        {/* mypage */}
        <Route path={ROUTE.PROFILE.BASE} element={<MyPage />}>
          <Route path={ROUTE.PROFILE.MYWRITINGS} element={<MyWritings />} />
          <Route path={ROUTE.PROFILE.MYCOMMENTS} element={<MyComments />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
