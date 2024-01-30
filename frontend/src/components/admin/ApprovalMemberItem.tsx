/* eslint-disable no-use-before-define */
import React from 'react';
import confirm from '@components/common/popup/confirm/Confirm';
import * as A from './style/Approval.style';

interface UserData {
  department: string;
  name: string;
}

interface MemberItemProps {
  userData: UserData;
}
const ClickAccept = () => {
  confirm({
    content: 'Hicc 회원으로 승인하시겠습니다?',
    okText: '승인',
    cancelText: '거절',
    isDangerous: false, // Set to true if it's a dangerous action
    onOk: handleOk,
    onCancel: handleCancel,
  });
};
const handleOk = () => {
  console.log('승인');
};
const handleCancel = () => {
  console.log('거절');
};
export default function ApprovalMemberItem({ userData }: MemberItemProps) {
  return (
    <A.MemberBox>
      <A.Major>{userData.department}</A.Major>
      <A.Name>{userData.name}</A.Name>
      <A.State onClick={ClickAccept}>
        <A.StateText>대기</A.StateText>
      </A.State>
    </A.MemberBox>
  );
}
