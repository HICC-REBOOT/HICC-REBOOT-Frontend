/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import Arrow from '@assets/image/icon/arrow.svg';
import styled, { css } from 'styled-components';
import * as I from './style/MemberInfo.style';
import MemberDetail, { UserData } from './MemberDetail';

interface MemberItemProps {
  userData: UserData;
}

export default function MemberInfoCollapse({ userData }: MemberItemProps) {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    setCollapsed(false);
  }, [userData]);
  const clickEvent = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <I.MemberBox onClick={clickEvent} style={{ backgroundColor: collapsed ? '#5B4EF5' : undefined }}>
        <I.MemberInfoMajor>{userData.department}</I.MemberInfoMajor>
        <I.MemberInfoName>{userData.name}</I.MemberInfoName>
        <I.Blank>
          <ArrowImage src={Arrow} alt="arrow" $rotated={collapsed} />
        </I.Blank>
      </I.MemberBox>
      {collapsed && <MemberDetail userData={userData} />}
    </>
  );
}

interface ArrowImageProps {
  $rotated: boolean;
}
const ArrowImage = styled.img<ArrowImageProps>`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
  transition: all ease 0.2s;
  ${(props) =>
    props.$rotated &&
    css`
      transform: rotate(180deg);
    `}
`;
