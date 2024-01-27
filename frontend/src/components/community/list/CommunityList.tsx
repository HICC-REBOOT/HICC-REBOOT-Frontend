import React, { Suspense, useState } from 'react';
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

  const options: OptionType[] = [
    { value: 'SUBJECT', label: '글 제목' },
    { value: 'MEMBER', label: '등급 순' },
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
      />
      <Suspense fallback={<Skeleton />}>
        <CommunityListInner currentOption={currentOption} searchQuery={searchQuery} />
      </Suspense>
    </Container>
  );
}

export default CommunityList;
