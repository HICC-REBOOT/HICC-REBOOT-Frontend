import React, { Suspense, useReducer, useState } from 'react';
import useInput from '@hooks/useInput';
import OptionType from '@components/common/dropdown/OptionType';
import useDropdown from '@hooks/useDropdown';
import Filter from './filter/Filter';
import CommunityListInner from './CommunityListInner';
import Container from './CommunityList.style';
import Skeleton from '../loading/Skeleton';

function CommunityList() {
  const [keyword, setKeyword] = useInput<string>('');
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const [isOnlyExecutive, setIsOnlyExecutive] = useReducer((prev: boolean) => !prev, false);

  const options: OptionType[] = [
    { value: 'SUBJECT', label: '제목 검색' },
    { value: 'MEMBER', label: '작성자 검색' },
  ];

  const { currentOption, onChange } = useDropdown({ defalutValue: options[0] });

  return (
    <Container>
      <Filter
        keyword={keyword}
        setKeyword={setKeyword}
        setSearchQuery={setSearchQuery}
        options={options}
        onChange={onChange}
        isOnlyExecutive={isOnlyExecutive}
        setIsOnlyExecutive={setIsOnlyExecutive}
      />
      <Suspense fallback={<Skeleton />}>
        <CommunityListInner currentOption={currentOption} searchQuery={searchQuery} isOnlyExecutive={isOnlyExecutive} />
      </Suspense>
    </Container>
  );
}

export default CommunityList;
