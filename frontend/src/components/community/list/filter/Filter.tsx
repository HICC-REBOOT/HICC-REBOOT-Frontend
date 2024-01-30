import React from 'react';
import DropDown from '@components/common/dropdown/Dropdown';
import OptionType from '@components/common/dropdown/OptionType';
import { ReactComponent as Search } from '@assets/image/icon/search.svg';
import Switch from '@components/common/switch/Switch';
import * as F from './Filter.style';

interface FilterProps {
  keyword: string;
  setKeyword: (state: string | React.ChangeEvent<HTMLInputElement>) => void;
  setSearchQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
  options: OptionType[];
  onChange: (selectedOption: OptionType | null) => void;
  isOnlyExecutive: boolean;
  setIsOnlyExecutive: React.DispatchWithoutAction;
}

function Filter({
  keyword,
  setKeyword,
  setSearchQuery,
  options,
  onChange,
  isOnlyExecutive,
  setIsOnlyExecutive,
}: FilterProps) {
  // 키워드가 검색버튼 클릭 시 반영되기 위해
  const onSearchClick = () => {
    if (keyword.trim() === '') {
      setSearchQuery(undefined);
    }

    setSearchQuery(keyword);
  };

  return (
    <F.Container>
      <F.SelectPart>
        <DropDown placeholder="" defaultValue={options[0]} options={options} onChange={onChange} />
        <F.Manager>
          <F.OnlyManagerLabel>운영진 글만 보기</F.OnlyManagerLabel>
          <Switch active={isOnlyExecutive} setActive={setIsOnlyExecutive} />
        </F.Manager>
      </F.SelectPart>
      <F.SearchPart>
        <F.Input type="text" value={keyword} onChange={setKeyword} placeholder="제목 검색하기" />
        <Search style={{ cursor: 'pointer' }} onClick={onSearchClick} />
      </F.SearchPart>
    </F.Container>
  );
}

export default Filter;
