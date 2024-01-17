import React from 'react';
import * as A from './style/Approval.style';

export default function ApprovalMemberItem() {
  return (
    <A.MemberBox>
      <A.Major>캠퍼스자율전공(서울)</A.Major>
      <A.Name>최세호</A.Name>
      <A.State>
        <A.StateText>대기</A.StateText>
      </A.State>
    </A.MemberBox>
  );
}
