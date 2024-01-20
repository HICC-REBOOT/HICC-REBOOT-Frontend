import React from 'react';
import DropDown from '@components/common/dropdown/Dropdown';
import OptionType from '@components/common/dropdown/OptionType';
import { ReactComponent as Search } from '@assets/image/icon/search.svg';
import * as F from './Filter.style';

function Filter() {
  const options: OptionType[] = [
    { value: 'SUBJECT', label: '글 제목' },
    { value: 'MEMBER', label: '등급 순' },
  ];

  const onChange = () => {};

  return (
    <F.Container>
      <F.SelectPart>
        <DropDown placeholder="" defaultValue={options[0]} options={options} onChange={onChange} />
        <F.Manager>
          <F.OnlyManagerLabel>운영진 글만 보기</F.OnlyManagerLabel>
        </F.Manager>
      </F.SelectPart>
      <F.SearchPart>
        <F.Input type="text" placeholder="제목 검색하기" />
        <Search style={{ cursor: 'pointer' }} />
      </F.SearchPart>
    </F.Container>
  );
}

export default Filter;
