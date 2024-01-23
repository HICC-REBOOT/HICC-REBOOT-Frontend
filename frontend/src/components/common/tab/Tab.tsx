import React from 'react';
import { ConfigProvider } from 'antd';
import useTab from '@hooks/useTab';
import * as T from './Tab.style';

/**
 * TabUnit
 *
 * key: 세부 url
 *
 * label: 탭에 보여질 이름
 */
export interface TabUnit {
  key: string;
  label: string;
}

interface TabProps {
  items: TabUnit[];
  initKey: string;
}

function Tab({ items, initKey }: TabProps) {
  const { activeKey, onChange } = useTab({ initKey });

  return (
    <ConfigProvider theme={T.tabConfigStyle}>
      <T.StyledTabs
        defaultActiveKey={initKey}
        activeKey={activeKey}
        centered
        items={items}
        tabBarStyle={T.tabBarStyle}
        onChange={onChange}
      />
    </ConfigProvider>
  );
}

export default Tab;
