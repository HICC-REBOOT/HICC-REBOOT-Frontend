import React from 'react';
import useTab from '@hooks/useTab';
import useAuth from '@hooks/useAuth';
import TabElement from './TabElement';
import TabContainer from './style/Tab.style';

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
  presidentAuthorization?: boolean;
}

interface TabProps {
  items: TabUnit[];
  initKey: string;
}

function Tab({ items, initKey }: TabProps) {
  const tabinfo = useTab({ initKey });
  const { isPresident } = useAuth();

  return (
    <TabContainer>
      {items.map((item, index) => {
        // 인가가 필요없는 경우 모두 보여준다.
        if (item.presidentAuthorization === undefined) {
          return <TabElement key={`tab-${item.key}-${index}`} item={item} {...tabinfo} />;
        }
        // 인가가 필요한 경우 & 회장인 경우만 탭을 보여준다.
        if (item.presidentAuthorization === true && isPresident) {
          return <TabElement key={`tab-${item.key}-${index}`} item={item} {...tabinfo} />;
        }
        // 인가가 필요한 경우이나, 회장이 아니라면 탭을 보여주지 않는다.
        return undefined;
      })}
    </TabContainer>
  );
}

export default Tab;
