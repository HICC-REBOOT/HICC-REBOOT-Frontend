import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider } from 'antd';
import theme from '@styles/theme';
import * as A from './style/Approval.style';
import * as I from './style/MemberInfo.style';
import MemberDetail from './MemberDetail';
import MemberItem from './MemberItem';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: <MemberItem />,
    children: <MemberDetail />,
    showArrow: false,
  },
  {
    key: '2',
    label: <MemberItem />,
    children: <MemberDetail />,
    showArrow: false,
  },
  {
    key: '3',
    label: <MemberItem />,
    children: <MemberDetail />,
    showArrow: false,
  },
];

export default function MemberInfo() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <A.MembersBox>
      <A.CategoryBox>
        <I.MemberInfoMajorDivision>Major</I.MemberInfoMajorDivision>
        <I.MemberInfoNameDivision>Name</I.MemberInfoNameDivision>
        <I.BlankDivision />
      </A.CategoryBox>

      <ConfigProvider
        theme={{
          token: {
            paddingSM: 0,
          },
          components: {
            Collapse: {
              contentPadding: 0,
              headerPadding: 0,
            },
          },
        }}
      >
        <Collapse bordered={false} ghost={true} items={items} onChange={onChange} />
      </ConfigProvider>
    </A.MembersBox>
  );
}
