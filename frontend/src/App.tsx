import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import calculateFoundationYear from '@utils/calculateFoundationYear';

import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import ROUTE from '@constants/route';
import Admin from '@pages/Admin/Admin';
import Home from '@pages/Home';
import Calendar from '@pages/Calendar';
import Community from '@pages/community/Community';
import MyPage from '@pages/MyPage';
import MyInfomation from '@pages/MyInfo';
import Temp from '@pages/temp/Temp';

import { MyWritings, MyComments } from '@components/mypage';
import { Login, SignUp, ChangePassword, ResetPassword, EnterInfo } from '@pages/auth';
import { ArticleDetail, CommunityList, CommunityUpdate, CommunityWrite } from '@components/community';
import { Approval, ChangeGrade, MemberInfo } from '@components/admin';
import { Temp1, Temp2, Temp3 } from '@components/Temp';
import NotFound from '@components/common/error/NotFound';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const fillFoundationYearDescription = () => {
    return `${calculateFoundationYear()}년의 전통의 역사를 가진 홍익 콤퓨타연구반 HICC입니다.`;
  };

  return (
    <>
      <Helmet>
        <meta property="og:url" content="https://www.hicc.co.kr" />
        <meta property="og:title" content="HICC" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="%PUBLIC_URL%/king_president.jpg" />
        <meta property="og:description" content={fillFoundationYearDescription()} />
        <title>Hong Ik Computer Club</title>
      </Helmet>
      <Routes>
        <Route element={<Layout />}>
          {/* admin */}
          <Route path={ROUTE.ADMIN.BASE} element={<Admin />}>
            <Route path={ROUTE.ADMIN.APPROVAL} element={<Approval />} />
            <Route path={ROUTE.ADMIN.INFO} element={<MemberInfo />} />
            <Route path={ROUTE.ADMIN.CHANGE} element={<ChangeGrade />} />
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
          {/* dev */}
          <Route path={ROUTE.TEMP.BASE} element={<Temp />}>
            <Route path={ROUTE.TEMP.APPLE} element={<Temp1 />} />
            <Route path={ROUTE.TEMP.BANANA} element={<Temp2 />} />
            <Route path={ROUTE.TEMP.MANGO} element={<Temp3 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
