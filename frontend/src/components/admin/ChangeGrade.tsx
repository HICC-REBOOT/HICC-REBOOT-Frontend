/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';
import Search from '@assets/image/icon/search.svg';
import OptionType from '@components/common/dropdown/OptionType';
import Dropdown from '@components/common/dropdown/Dropdown';
import useDropdown from '@hooks/useDropdown';
import useServerSidePagination from '@query/get/useServerSidePagination';
import COMMON from '@constants/common';
import KeyboardUtils from '@utils/keyboard';
import * as I from './style/MemberInfo.style';
import { UserData } from './MemberDetail';
import ChangeGradeCollapse from './ChangeGradeCollapse';

export default function ChangeGrade() {
  const [userInput, setUserInput] = useState('');
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const options: OptionType[] = [
    { value: 'grade', label: '등급 순' },
    { value: 'name', label: '이름 순' },
    { value: 'department', label: '학과 순' },
  ];
  const { currentOption, onChange } = useDropdown({ defalutValue: options[0] });
  const { curPageItem, renderPaginationBtnOrInfinityScroll } = useServerSidePagination<UserData>({
    uri: '/api/admin/president/members',
    size: COMMON.PAGINATION.SIZE,
    search: searchQuery,
    sort: currentOption?.value,
  });

  const getValue = (e: any) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const searching = () => {
    setSearchQuery(userInput);
  };

  return (
    <>
      <I.SearchBar>
        <I.SearchBox>
          <Input
            placeholder="회원명 검색"
            maxLength={10}
            onChange={getValue}
            onKeyDown={(event) => KeyboardUtils.onPressEnterByInput(event, searching)}
          />
          <SearchButton src={Search} alt="search" onClick={searching} />
        </I.SearchBox>
        <Dropdown placeholder="등급 순" options={options} onChange={onChange} dropdownWidth="11rem" />
      </I.SearchBar>
      <I.MembersBox>
        <I.CategoryBox>
          <I.MemberInfoMajorDivision>Major</I.MemberInfoMajorDivision>
          <I.MemberInfoNameDivision>Name</I.MemberInfoNameDivision>
          <I.BlankDivision />
        </I.CategoryBox>
        {curPageItem.map((user, index) => (
          <ChangeGradeCollapse key={index} userData={user} />
        ))}
      </I.MembersBox>
      {renderPaginationBtnOrInfinityScroll()}
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
  ${(props) => props.theme.media.tablet`
    width: 35.3rem;
  `};
  ${(props) => props.theme.media.desktop`
    width: 64.1rem;
  `};
  ${(props) => props.theme.media.wide`
    width: 64.1rem;
  `};
`;
const SearchButton = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
  &:active {
    opacity: 0.3;
  }
`;
