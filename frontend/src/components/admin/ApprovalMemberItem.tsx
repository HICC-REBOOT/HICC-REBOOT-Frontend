import React from 'react';
import * as A from './style/Approval.style';

interface UserData {
  major: string;
  name: string;
}

interface MemberItemProps {
  userData: UserData;
}

export default function ApprovalMemberItem({ userData }: MemberItemProps) {
  return (
    <A.MemberBox>
      <A.Major>{userData.major}</A.Major>
      <A.Name>{userData.name}</A.Name>
      <A.State>
        <A.StateText>대기</A.StateText>
      </A.State>
    </A.MemberBox>
  );
}
