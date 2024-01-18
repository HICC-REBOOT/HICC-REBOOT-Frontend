/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';
import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider } from 'antd';
import theme from '@styles/theme';
import * as A from './style/Approval.style';
import * as I from './style/MemberInfo.style';
import MemberDetail from './MemberDetail';
import MemberItem from './MemberItem';
import UserData from './dummy/dummy';

const items: CollapseProps['items'] = UserData.content.map((user, index) => ({
  key: String(index + 1),
  label: <MemberItem userData={user} />,
  children: <MemberDetail userData={user} />,
  showArrow: false,
}));

export default function MemberInfo() {
  const [userInput, setUserInput] = useState();
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <>
      <I.SearchBar>
        <I.SearchBox>
          <Input placeholder="회원명 검색" maxLength={10} formAction="none" />
          <SearchButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect width="18" height="18" fill="#FFA7A7" />
            </svg>
          </SearchButton>
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
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  border: none;
  outline: none;
`;
const SearchButton = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
  &:active {
    opacity: 0.3;
  }
`;
