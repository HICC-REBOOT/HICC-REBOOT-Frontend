import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider } from 'antd';
import theme from '@styles/theme';
import * as A from './style/Approval.style';
import MemberDetail from './MemberDetail';
import ApprovalMemberItem from './ApprovalMemberItem';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: <ApprovalMemberItem />,
    children: <MemberDetail />,
    showArrow: false,
  },
  {
    key: '2',
    label: <ApprovalMemberItem />,
    children: <MemberDetail />,
    showArrow: false,
  },
  {
    key: '3',
    label: <ApprovalMemberItem />,
    children: <MemberDetail />,
    showArrow: false,
  },
];

export default function Approval() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <A.MembersBox>
      <A.CategoryBox>
        <A.MajorDivision>Major</A.MajorDivision>
        <A.NameDivision>Name</A.NameDivision>
        <A.StateDivision>State</A.StateDivision>
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
