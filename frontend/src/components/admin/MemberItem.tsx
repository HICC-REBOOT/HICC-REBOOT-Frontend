import React from 'react';
import * as A from './style/Approval.style';
import * as I from './style/MemberInfo.style';

export default function MemberItem() {
  return (
    <A.MemberBox>
      <I.MemberInfoMajor>캠퍼스자율전공(서울)</I.MemberInfoMajor>
      <I.MemberInfoName>최세호</I.MemberInfoName>
      <I.Blank />
    </A.MemberBox>
  );
}
