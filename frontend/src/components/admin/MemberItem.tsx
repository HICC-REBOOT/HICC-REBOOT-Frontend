import React from 'react';
import * as A from './style/Approval.style';
import * as I from './style/MemberInfo.style';

interface MemberItemProps {
  major: string;
  name: string;
}

export default function MemberItem({ major, name }: MemberItemProps) {
  return (
    <A.MemberBox>
      <I.MemberInfoMajor>{major}</I.MemberInfoMajor>
      <I.MemberInfoName>{name}</I.MemberInfoName>
      <I.Blank />
    </A.MemberBox>
  );
}
