import React from 'react';
import * as A from './style/Approval.style';
import * as I from './style/MemberInfo.style';

interface UserData {
  major: string;
  name: string;
}

interface MemberItemProps {
  userData: UserData;
}

export default function MemberItem({ userData }: MemberItemProps) {
  return (
    <A.MemberBox>
      <I.MemberInfoMajor>{userData.major}</I.MemberInfoMajor>
      <I.MemberInfoName>{userData.name}</I.MemberInfoName>
      <I.Blank />
    </A.MemberBox>
  );
}
