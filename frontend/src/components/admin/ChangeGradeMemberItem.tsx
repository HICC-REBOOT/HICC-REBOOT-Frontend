/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import Arrow from '@assets/image/icon/arrow.svg';
import styled, { css } from 'styled-components';
import confirm from '@components/common/popup/confirm/Confirm';
import RadioGroup from '@components/common/radio/RadioGroup';
import RadioType from '@components/common/radio/RadioType';
import * as A from './style/Approval.style';
import * as I from './style/MemberInfo.style';

interface UserData {
  major: string;
  name: string;
}

interface MemberItemProps {
  userData: UserData;
}
const options: RadioType[] = [
  {
    tag: '필수',
    disabled: false,
    label: '1번입니다.',
    value: '1',
  },
  {
    tag: '필수',
    disabled: false,
    label: '2번입니다.',
    value: '2',
  },
  {
    tag: '필수',
    disabled: true,
    label: '3번입니다.',
    value: '3',
  },
];

const handleGrade = () => {
  confirm({
    // content: <RadioGroup options={options} />,
    content: '등급 변경',
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

export default function ChangeGradeMemberItem({ userData }: MemberItemProps) {
  const [collapsed, setCollapsed] = useState(false);
  const clickEvent = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
    handleGrade();
  };
  return (
    <A.MemberBox onClick={clickEvent}>
      <I.MemberInfoMajor>{userData.major}</I.MemberInfoMajor>
      <I.MemberInfoName>{userData.name}</I.MemberInfoName>
      <I.Blank>
        <ArrowImage src={Arrow} alt="arrow" rotated={collapsed} />
      </I.Blank>
    </A.MemberBox>
  );
}

interface ArrowImageProps {
  rotated: boolean;
}
const ArrowImage = styled.img<ArrowImageProps>`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
  transition: all ease 0.2s;
  ${(props) =>
    props.rotated &&
    css`
      transform: rotate(180deg);
    `}
`;
