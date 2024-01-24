/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';
import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider } from 'antd';
import Search from '@assets/image/icon/search.svg';
import * as A from './style/Approval.style';
import * as I from './style/MemberInfo.style';
import MemberDetail from './MemberDetail';
import MemberItem from './MemberItem';
import UserData from './dummy/dummy';

export default function MemberInfo() {
  const [userInput, setUserInput] = useState('');
  const [searched, setSearched] = useState(UserData.content);

  const items: CollapseProps['items'] = searched.map((user, index) => ({
    key: String(index + 1),
    label: <MemberItem userData={user} />,
    children: <MemberDetail userData={user} />,
    showArrow: false,
  }));
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  const getValue = (e: any) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const searching = () => {
    const filteredData = UserData.content.filter((item) => item.name.toLowerCase().includes(userInput));
    setSearched(filteredData);
  };
  return (
    <>
      <I.SearchBar>
        <I.SearchBox>
          <Input placeholder="회원명 검색" maxLength={8} onChange={getValue} />
          <SearchButton src={Search} alt="search" onClick={searching} />
        </I.SearchBox>
        <I.DropDownBox>DropDown</I.DropDownBox>
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
          <Collapse bordered={false} ghost={true} items={items} onChange={onChange} />
        </ConfigProvider>
      </A.MembersBox>
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
