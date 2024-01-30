/* eslint-disable no-use-before-define */
import React, { useReducer, useState } from 'react';
import type { CollapseProps } from 'antd';
import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';
import { Collapse, ConfigProvider } from 'antd';
import Search from '@assets/image/icon/search.svg';
import OptionType from '@components/common/dropdown/OptionType';
import Dropdown from '@components/common/dropdown/Dropdown';
import useDropdown from '@hooks/useDropdown';
import RadioGroup from '@components/common/radio/RadioGroup';
import RadioType from '@components/common/radio/RadioType';
import ExtensionModal from '@components/common/popup/confirm/ExtensionModal';
import confirm from '@components/common/popup/confirm/Confirm';
import useGetMembers from '@query/get/useGetMembers';
import * as A from './style/Approval.style';
import * as I from './style/MemberInfo.style';
import MemberDetail from './MemberDetail';
import ChangeGradeMemberItem from './ChangeGradeMemberItem';

interface ContentType {
  id: number;
  department: string;
  name: string;
  grade: string;
  studentNumber: string;
  phoneNumber: string;
  approvedDate: string | null;
}

export default function ChangeGrade() {
  const { data } = useGetMembers();
  const [userInput, setUserInput] = useState('');
  const [searched, setSearched] = useState<ContentType[]>(data.content);
  const [radio, setRadio] = useState<RadioType | undefined>();
  const [modalOpen, setIsModalOpen] = useReducer((prev: boolean) => !prev, false);

  const options: OptionType[] = [
    { value: '1', label: '등급 순' },
    { value: '2', label: '이름 순' },
    { value: '3', label: '학과 순' },
  ];
  const { currentOption, onChange } = useDropdown({});

  const defaultValue = { value: '1', label: '등급 순' };

  const items: CollapseProps['items'] = searched.map((user, index) => ({
    key: String(index + 1),
    label: <ChangeGradeMemberItem userData={user} onClick={setIsModalOpen} />,
    children: <MemberDetail userData={user} />,
    showArrow: false,
  }));

  const getValue = (e: any) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const searching = () => {
    const filteredData = data.content.filter((item) => item.name.toLowerCase().includes(userInput));
    setSearched(filteredData);
  };
  const radios: RadioType[] = [
    {
      tag: '필수',
      disabled: false,
      label: '[회원]으로 등급 변경',
      value: '1',
    },
    {
      tag: '필수',
      disabled: false,
      label: '[운영진]으로 등급 변경',
      value: '2',
    },
    {
      tag: '필수',
      disabled: false,
      label: '강제 탈퇴',
      value: '3',
    },
  ];

  const popup = () => {
    confirm({
      content: '정말 탈퇴?',
      okText: '탈퇴',
      cancelText: '취소',
      isDangerous: true,
      onOk: () => console.log('d'),
    });
  };

  const modalInfo = {
    close: setIsModalOpen,
    title: '[회원] 장윤영 님에 대한 회원 정보를 수정합니다.',
    content: <RadioGroup options={radios} currentOption={radio} setCurrentOption={setRadio} />,
    okText: '확인',
    cancelText: '취소',
    onOk: popup,
  };
  return (
    <>
      <I.SearchBar>
        <I.SearchBox>
          <Input placeholder="회원명 검색" maxLength={10} onChange={getValue} />
          <SearchButton src={Search} alt="search" onClick={searching} />
        </I.SearchBox>
        <Dropdown placeholder="등급 순" options={options} onChange={onChange} defaultValue={defaultValue} />
      </I.SearchBar>
      <A.MembersBox>
        <A.CategoryBox>
          <I.MemberInfoMajorDivision>Major</I.MemberInfoMajorDivision>
          <I.MemberInfoNameDivision>Name</I.MemberInfoNameDivision>
          <I.BlankDivision />
        </A.CategoryBox>

        <ConfigProvider
          theme={{
            token: {
              paddingSM: 0,
            },
            components: {
              Collapse: {
                contentPadding: 0,
                headerPadding: 0,
              },
            },
          }}
        >
          <Collapse bordered={false} ghost={true} items={items} />
        </ConfigProvider>
      </A.MembersBox>
      {modalOpen && <ExtensionModal {...modalInfo} />}
    </>
  );
}

const Input = styled.input`
  width: 14.8rem;
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  border: none;
  outline: none;
  ${(props) => props.theme.typography[DeviceProvider()].body}
`;
const SearchButton = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
  &:active {
    opacity: 0.3;
  }
`;
