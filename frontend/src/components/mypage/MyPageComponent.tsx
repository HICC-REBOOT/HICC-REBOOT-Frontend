import React from 'react';
import Tab, { TabUnit } from '@components/common/tab/Tab';
import { Outlet } from 'react-router-dom';
import ROUTE from '@constants/route';

import * as M from './style/MyPageComponent.style';

const items: TabUnit[] = [
  {
    key: ROUTE.PROFILE.MYWRITINGS,
    label: '내가 쓴 글',
  },
  {
    key: ROUTE.PROFILE.MYCOMMENTS,
    label: '내 댓글',
  },
];

function MyPageComponent() {
  return (
    <M.Container>
      <M.GroupContainer>
        <M.TabContainer>
          <Tab items={items} initKey={items[0].key} />
        </M.TabContainer>
        <Outlet />
      </M.GroupContainer>
    </M.Container>
  );
}

export default MyPageComponent;
