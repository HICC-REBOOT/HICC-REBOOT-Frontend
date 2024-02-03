import React, { useEffect } from 'react';
import useGetApprovalList from '@query/get/useGetApprovalList';
import * as A from './style/Approval.style';
import ApprovalMemberItem from './ApprovalMemberItem';

export default function Approval() {
  const { data } = useGetApprovalList();
  useEffect(() => {
    console.log('승인 : ', data.content);
  }, []);
  return (
    <A.MembersBox>
      <A.CategoryBox>
        <A.MajorDivision>Major</A.MajorDivision>
        <A.NameDivision>Name</A.NameDivision>
        <A.StateDivision>State</A.StateDivision>
      </A.CategoryBox>
      {data.content.map((user, index) => (
        <ApprovalMemberItem key={index} userData={user} />
      ))}
    </A.MembersBox>
  );
}
