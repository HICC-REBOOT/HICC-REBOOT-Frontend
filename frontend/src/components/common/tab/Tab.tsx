import React from 'react';
import { TabsProps, ConfigProvider } from 'antd';
import * as T from './Tab.style';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '내가 쓴 글',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: '회원정보',
    children: 'Content of Tab Pane 2',
  },
];

interface TabItemProps {
  key: string;
  label: string;
  children: React.JSX.Element;
}

interface TabProps {
  items: TabItemProps[];
}

function Tab() {
  return (
    <ConfigProvider theme={T.tabConfigStyle}>
      <T.StyledTabs defaultActiveKey="1" centered items={items} tabBarStyle={T.tabBarStyle} />
    </ConfigProvider>
  );
}

export default Tab;
