import React from 'react';
import { Outlet } from 'react-router-dom';

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

  return (
    <>
      <Tab items={items} initKey={items[0].key} />
      <Outlet />
    </>
  );
}

export default Temp;
