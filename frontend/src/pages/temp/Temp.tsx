import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Tab, { TabUnit } from '@components/common/tab/Tab';

function Temp() {
  const items: TabUnit[] = [
    {
      key: 'apple',
      label: '내가 쓴 글',
    },
    {
      key: 'banana',
      label: '회원정보',
    },
    {
      key: 'mango',
      label: '개인정보',
    },
  ];

  const location = useLocation();
  const path = location.pathname.split('/')[2] || items[0].key;

  return (
    <>
      <Tab items={items} initkey={path} />
      <Outlet />
    </>
  );
}

export default Temp;
