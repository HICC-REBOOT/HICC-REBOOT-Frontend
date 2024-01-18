import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider } from 'antd';
import theme from '@styles/theme';
import * as A from './style/Approval.style';
import * as I from './style/MemberInfo.style';
import MemberDetail from './MemberDetail';
import MemberItem from './MemberItem';

const UserData = {
  content: [
    {
      grade: 'PRESIDENT',
      name: '윤찬호',
      id: 'C011001',
      major: '컴퓨터공학과',
      phone_number: '010-1111-1111',
      acceptDate: '2024-01-08 16:49',
    },
    {
      grade: 'GRADUATE',
      name: '김진호',
      id: 'B731000',
      major: '컴퓨터공학과',
      phone_number: '010-1111-1111',
      acceptDate: '2024-01-08 16:49',
    },
    {
      grade: 'GRADUATE',
      name: '최세호',
      id: 'B811197',
      major: '컴퓨터공학과',
      phone_number: '010-1111-1111',
      acceptDate: '2024-01-08 16:49',
    },
  ],
};

const items: CollapseProps['items'] = UserData.content.map((user, index) => ({
  key: String(index + 1),
  label: <MemberItem userData={user} />,
  children: <MemberDetail />,
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
