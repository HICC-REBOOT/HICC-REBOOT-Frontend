import React, { useState } from 'react';

import Search from '@assets/image/icon/search.svg';
import OptionType from '@components/common/dropdown/OptionType';
import Dropdown from '@components/common/dropdown/Dropdown';
import useDropdown from '@hooks/useDropdown';
import useInfinityScroll from '@query/get/useInfinityScroll';
import COMMON from '@constants/common';
import KeyboardUtils from '@utils/keyboard';
import * as I from './style/MemberInfo.style';
import { UserData } from './MemberDetail';
import MemberInfoCollapse from './MemberInfoCollapse';

export default function MemberInfo() {
  const [userInput, setUserInput] = useState('');
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const options: OptionType[] = [
    { value: 'grade', label: '등급 순' },
    { value: 'name', label: '이름 순' },
    { value: 'department', label: '학과 순' },
  ];
  const { currentOption, onChange } = useDropdown({ defaultValue: options[0] });
  const { curPageItem, renderNextAreaForInfinityScroll } = useInfinityScroll<UserData>({
    uri: '/api/admin/members',
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
          <I.Input
            placeholder="회원명 검색"
            maxLength={8}
            onChange={getValue}
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
              KeyboardUtils.onPressEnterByInput(event, searching)
            }
          />
          <I.SearchButton src={Search} alt="search" onClick={searching} />
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
          <MemberInfoCollapse key={index} userData={user} />
        ))}
      </I.MembersBox>
      {renderNextAreaForInfinityScroll()}
    </>
  );
}
