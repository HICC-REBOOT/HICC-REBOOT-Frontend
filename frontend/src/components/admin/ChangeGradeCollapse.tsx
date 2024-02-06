/* eslint-disable no-use-before-define */
import React, { useEffect, useReducer, useState } from 'react';
import Arrow from '@assets/image/icon/arrow.svg';
import styled, { css } from 'styled-components';
import RadioGroup from '@components/common/radio/RadioGroup';
import RadioType from '@components/common/radio/RadioType';
import ExtensionModal from '@components/common/popup/confirm/ExtensionModal';
import confirm from '@components/common/popup/confirm/Confirm';
import usePatchChangeGrade from '@query/patch/usePatchChangeGrade';
import useDeleteMember from '@query/delete/useDeleteMember';
import * as I from './style/MemberInfo.style';
import MemberDetail, { UserData } from './MemberDetail';

interface MemberItemProps {
  userData: UserData;
}

export default function ChangeGradeCollapse({ userData }: MemberItemProps) {
  const { updateGrade, isPending } = usePatchChangeGrade({ id: userData.id });
  const { deleteMember, isDeletePending } = useDeleteMember({ id: userData.id });
  const [collapsed, setCollapsed] = useState(false);
  const [option, setOption] = useState<RadioType | undefined>();
  const [modalOpen, setIsModalOpen] = useReducer((prev: boolean) => !prev, false);

  const options: RadioType[] = [
    {
      tag: '등급',
      disabled: false,
      label: '[회장]으로 위임',
      value: 'PRESIDENT',
    },
    {
      tag: '등급',
      disabled: false,
      label: '[회원]으로 등급 변경',
      value: 'NORMAL',
    },
    {
      tag: '등급',
      disabled: true,
      label: '[운영진]으로 등급 변경',
      value: 'EXECUTIVE',
    },
    {
      tag: '강퇴',
      disabled: false,
      label: '강제 탈퇴',
      value: '3',
      warning: '*강제 탈퇴 이후 회원 목록으로 복귀할 수 없습니다.',
    },
  ];

  if (userData.grade === 'NORMAL') {
    options[0].disabled = true;
    options[1].disabled = true;
    options[2].disabled = false;
  } else if (userData.grade === 'EXECUTIVE') {
    options[0].disabled = false;
    options[1].disabled = false;
    options[2].disabled = true;
  } else {
    options[0].disabled = true;
    options[1].disabled = true;
    options[2].disabled = true;
    options[3].disabled = true;
  }

  const popup = () => {
    confirm({
      content: `${userData.name} 님을 강제 탈퇴 시킵니다. [강제 탈퇴] 후 최소할 수 없습니다.`,
      okText: '강제 탈퇴',
      cancelText: '취소',
      isDangerous: true,
      onOk: () => deleteMember(),
      close: setIsModalOpen,
    });
  };
  const checkPopup = () => {
    confirm({
      content: (
        <TitleWrapper>
          <Title>{userData.name} 님을 [회장]으로 위임합니다.</Title>
          <SubTitle>
            * 회장 위임 시 {userData.name} 님은 [회장]으로 위임되고, 본인은 [운영진]으로 등급이 수정됩니다.
          </SubTitle>
        </TitleWrapper>
      ),
      okText: '위임하기',
      cancelText: '취소',
      isDangerous: false,
      onOk: () => doubleCheckPopup(),
      close: setIsModalOpen,
    });
  };
  const doubleCheckPopup = () => {
    confirm({
      content: (
        <TitleWrapper>
          <Title>본인은 [운영진]으로 변경됩니다.</Title>
          <SubTitle>
            * 확인 즉시 {userData.name} 님은 [회장]으로, 본인은 [운영진]으로 등급이 수정되며, 이후 회장 위임을 취소할 수
            없습니다.
          </SubTitle>
        </TitleWrapper>
      ),
      okText: '확인했어요',
      cancelText: '취소',
      isDangerous: true,
      onOk: () => updateGrade({ grade: 'PRESIDENT' }),
      close: setIsModalOpen,
    });
  };

  const modalInfo = {
    close: setIsModalOpen,
    title: `[회원] ${userData.name} 님에 대한 회원 정보를 수정합니다.`,
    content: <RadioGroup options={options} currentOption={option} setCurrentOption={setOption} />,
    okText: '확인',
    cancelText: '취소',
    onOk: popup,
  };
  useEffect(() => {
    console.log('option : ', option);
  }, [option]);

  if (option?.value === '3') {
    modalInfo.onOk = popup;
  } else if (option?.value === 'PRESIDENT') {
    modalInfo.onOk = checkPopup;
  } else {
    modalInfo.onOk = () => {
      if (option?.value === 'NORMAL') {
        updateGrade({ grade: 'NORMAL' });
      } else if (option?.value === 'EXECUTIVE') {
        updateGrade({ grade: 'EXECUTIVE' });
      }
      setIsModalOpen();
    };
  }
  const clickEvent = () => {
    setIsModalOpen();
  };

  const onClickArrow = (event: any) => {
    event.stopPropagation();
    setCollapsed(!collapsed);
  };
  return (
    <>
      <I.MemberBox onClick={clickEvent} style={{ backgroundColor: collapsed ? '#5B4EF5' : undefined }}>
        <I.MemberInfoMajor>{userData.department}</I.MemberInfoMajor>
        <I.MemberInfoName>{userData.name}</I.MemberInfoName>
        <I.Blank onClick={onClickArrow}>
          <ArrowImage src={Arrow} alt="arrow" $rotated={collapsed} />
        </I.Blank>
      </I.MemberBox>
      {collapsed && <MemberDetail userData={userData} />}
      {modalOpen && <ExtensionModal {...modalInfo} />}
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
const TitleWrapper = styled.div`
  display: flex;
  width: 28.2rem;
  height: 7.7rem;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  color: var(--white, var(--Greyscale-light-white, #fff));
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Source Sans Pro';
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 2.72rem */
  letter-spacing: 0.1rem;
`;
const SubTitle = styled.div`
  color: var(--grey003, var(--Greyscale-light-white, #a3a4a9));
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Source Sans Pro';
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: 0.1rem;
`;
