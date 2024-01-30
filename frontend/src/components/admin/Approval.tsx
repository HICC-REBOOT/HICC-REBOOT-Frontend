import React, { useEffect } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider } from 'antd';
import useGetApprovalList from '@query/get/useGetApprovalList';
import * as A from './style/Approval.style';
import MemberDetail from './MemberDetail';
import ApprovalMemberItem from './ApprovalMemberItem';
import UserData from './dummy/dummy';

export default function Approval() {
  // const { approvalList } = useGetApprovalList();
  // useEffect(() => {
  //   console.log(approvalList);
  // }, []);
  const items: CollapseProps['items'] = UserData.content.map((user, index) => ({
    key: String(index + 1),
    label: <ApprovalMemberItem userData={user} />,
    children: <MemberDetail userData={user} />,
    showArrow: false,
  }));

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
        <Collapse bordered={false} ghost={true} items={items} />
      </ConfigProvider>
    </A.MembersBox>
  );
}
