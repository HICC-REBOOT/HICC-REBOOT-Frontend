import React from 'react';
import useTab from '@hooks/useTab';
import TabElement from './TabElement';
import TabContainer from './Tab.style';

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
  const tabinfo = useTab({ initKey });

  return (
    <TabContainer>
      {items.map((item, index) => (
        <TabElement key={`tab-${item.key}-${index}`} item={item} {...tabinfo} />
      ))}
    </TabContainer>
  );
}

export default Tab;
