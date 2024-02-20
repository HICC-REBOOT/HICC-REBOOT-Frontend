/* eslint-disable no-use-before-define */
import React, { useReducer } from 'react';
import confirm from '@components/common/popup/confirm/Confirm';
import usePatchApproval from '@query/patch/usePatchApproval';
import useDeleteApproval from '@query/delete/useDeleteApproval';
import ExtensionModal from '@components/common/popup/confirm/ExtensionModal';
import * as A from './style/Approval.style';

export interface UserApprovalDate {
  id: number;
  department: string;
  name: string;
}

interface MemberItemProps {
  userData: UserApprovalDate;
}

export default function ApprovalMemberItem({ userData }: MemberItemProps) {
  const { updateApproval, isPending } = usePatchApproval({ approvalId: userData.id });
  const { deleteApproval, isDeletePending } = useDeleteApproval({ approvalId: userData.id });
  const [modalOpen, setIsModalOpen] = useReducer((prev: boolean) => !prev, false);
  const handleOk = () => {
    console.log('승인');
    updateApproval();
  };
  const handleCancel = () => {
    console.log('거절');
    deleteApproval();
  };
  const ClickAccept = () => {
    confirm({
      content: `${userData.name} 님을 HICC 회원으로 승인하시겠습니까?`,
      okText: '승인',
      cancelText: '거절',
      isDangerous: false, // Set to true if it's a dangerous action
      onOk: handleOk,
      onCancel: handleCancel,
    });
  };
  const modalInfo = {
    close: setIsModalOpen,
    title: `${userData.name} 님을 HICC 회원으로 승인하시겠습니까?`,
    content: <></>,
    okText: '승인',
    cancelText: '거절',
    onOk: handleOk,
    onCancel: handleCancel,
  };
  const clickEvent = () => {
    setIsModalOpen();
  };
  return (
    <>
      <A.MemberBox>
        <A.Major>{userData.department}</A.Major>
        <A.Name>{userData.name}</A.Name>
        <A.State onClick={clickEvent}>
          <A.StateText>대기</A.StateText>
        </A.State>
      </A.MemberBox>
      {modalOpen && <ExtensionModal {...modalInfo} />}
    </>
  );
}
