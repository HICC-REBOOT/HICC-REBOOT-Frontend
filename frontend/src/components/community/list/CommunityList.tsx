import React, { Suspense } from 'react';
import Filter from './filter/Filter';
import CommunityListInner from './CommunityListInner';

function CommunityList() {
  return (
    <>
      <Filter />
      <Suspense fallback={<div>loading</div>}>
        <CommunityListInner />
      </Suspense>
    </>
  );
}

export default CommunityList;
