import React from 'react';
import { TabUnit } from './Tab';
import * as TE from './style/TabElement.style';

interface TabElementProps {
  item: TabUnit;
  activeKey: string;
  onChange: (key: string) => void;
}

function TabElement({ item, activeKey, onChange }: TabElementProps) {
  const isActive = activeKey === item.key;

  const changeTab = () => {
    onChange(item.key);
  };

  return (
    <TE.Container onClick={changeTab}>
      {isActive && <TE.Indicator layoutId="indicator" />}
      {item.label}
    </TE.Container>
  );
}

export default TabElement;
