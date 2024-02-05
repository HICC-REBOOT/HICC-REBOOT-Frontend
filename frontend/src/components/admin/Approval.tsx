import React from 'react';
import useServerSidePagination from '@query/get/useServerSidePagination';
import COMMON from '@constants/common';
import * as A from './style/Approval.style';
import ApprovalMemberItem, { UserApprovalDate } from './ApprovalMemberItem';

export default function Approval() {
  const { curPageItem, renderPaginationBtnOrInfinityScroll } = useServerSidePagination<UserApprovalDate>({
    uri: '/api/admin/applicants',
    size: COMMON.PAGINATION.SIZE,
  });
  return (
    <>
      <A.MembersBox>
        <A.CategoryBox>
          <A.MajorDivision>Major</A.MajorDivision>
          <A.NameDivision>Name</A.NameDivision>
          <A.StateDivision>State</A.StateDivision>
        </A.CategoryBox>
        {curPageItem.map((user, index) => (
          <ApprovalMemberItem key={index} userData={user} />
        ))}
      </A.MembersBox>
      {renderPaginationBtnOrInfinityScroll()}
    </>
  );
}
