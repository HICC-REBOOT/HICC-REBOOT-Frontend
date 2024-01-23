import React from 'react';
import Tab, { TabUnit } from '@components/common/tab/Tab';
import { Outlet } from 'react-router-dom';
import ROUTE from '@constants/route';
import * as A from './Admin.style';

const items: TabUnit[] = [
  {
    key: ROUTE.ADMIN.APPROVAL,
    label: '회원 승인',
  },
  {
    key: ROUTE.ADMIN.INFO,
    label: '회원 정보',
  },
  {
    key: ROUTE.ADMIN.CHANGE,
    label: '등급 수정',
  },
];

function Admin() {
  return (
    <A.Container>
      <A.TabContainer>
        <Tab items={items} initKey={items[0].key} />
      </A.TabContainer>
      <A.Inner>
        <Outlet />
      </A.Inner>
    </A.Container>
  );
}

export default Admin;
