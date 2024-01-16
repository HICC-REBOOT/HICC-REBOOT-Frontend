import React, { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as T from './Tab.style';

export interface TabUnit {
  key: string;
  label: string;
}

interface TabProps {
  items: TabUnit[];
  initkey: string;
}

function Tab({ items, initkey }: TabProps) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(initkey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initkey]);

  const onChange = (key: string) => {
    navigate(key);
  };

  return (
    <ConfigProvider theme={T.tabConfigStyle}>
      <T.StyledTabs defaultActiveKey={initkey} centered items={items} tabBarStyle={T.tabBarStyle} onChange={onChange} />
    </ConfigProvider>
  );
}

export default Tab;
