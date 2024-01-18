import React from 'react';
import { log } from 'console';
import Confirm from '@components/common/popup/confirm/Confirm';
import * as A from './style/Approval.style';

interface UserData {
  major: string;
  name: string;
}

interface MemberItemProps {
  userData: UserData;
}
const ClickAccept = () => {
  console.log('클릭함');
};
const Ok = () => {
  console.log('승인');
};
const Cancel = () => {
  console.log('거절');
};
export default function ApprovalMemberItem({ userData }: MemberItemProps) {
  return (
    <A.MemberBox>
      <A.Major>{userData.major}</A.Major>
      <A.Name>{userData.name}</A.Name>
      <A.State>
        <A.StateText onClick={ClickAccept}>
          {/* <Confirm
            content={'대기'}
            okText={'승인'}
            cancelText={'거절'}
            isDangerous={false}
            onOk={Ok}
            onCancel={Cancel}
          /> */}
        </A.StateText>
      </A.State>
    </A.MemberBox>
  );
}
