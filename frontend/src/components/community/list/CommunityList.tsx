import React, { Suspense } from 'react';
import Filter from './filter/Filter';
import CommunityListInner from './CommunityListInner';
import Container from './CommunityList.style';

function CommunityList() {
  return (
    <Container>
      <Filter />
      <Suspense fallback={<div>loading</div>}>
        <CommunityListInner />
      </Suspense>
    </Container>
  );
}

export default CommunityList;
