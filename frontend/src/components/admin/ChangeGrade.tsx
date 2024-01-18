import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider } from 'antd';
import theme from '@styles/theme';
import * as A from './style/Approval.style';
import * as I from './style/MemberInfo.style';
import MemberDetail from './MemberDetail';
import MemberItem from './MemberItem';
import UserData from './dummy/dummy';

const items: CollapseProps['items'] = UserData.content.map((user, index) => ({
  key: String(index + 1),
  label: <MemberItem userData={user} />,
  children: <MemberDetail userData={user} />,
  showArrow: false,
}));

export default function ChangeGrade() {
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
