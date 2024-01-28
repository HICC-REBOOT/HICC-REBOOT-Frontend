/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import Arrow from '@assets/image/icon/arrow.svg';
import styled, { css } from 'styled-components';
import * as A from './style/Approval.style';
import * as I from './style/MemberInfo.style';

interface UserData {
  major: string;
  name: string;
}

interface MemberItemProps {
  userData: UserData;
  onClick: () => void;
}

export default function ChangeGradeMemberItem({ userData, onClick }: MemberItemProps) {
  const [collapsed, setCollapsed] = useState(false);
  const clickEvent = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
    onClick();
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