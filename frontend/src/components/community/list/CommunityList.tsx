import React, { Suspense } from 'react';
import Filter from './filter/Filter';
import CommunityListInner from './CommunityListInner';
import Container from './CommunityList.style';
import Skeleton from '../loading/Skeleton';

function CommunityList() {
  return (
    <Container>
      <Filter />
      <Suspense fallback={<Skeleton />}>
        <CommunityListInner />
      </Suspense>
    </Container>
  );
}

export default CommunityList;
