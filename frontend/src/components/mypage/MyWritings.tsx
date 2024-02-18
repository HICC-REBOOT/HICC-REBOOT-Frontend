import React, { Suspense } from 'react';
import Skeleton from '@components/community/loading/Skeleton';

import WritingsInner from './mypage/WritingsInner';
import * as M from './style/MyWritings.style';

function MyWritings() {
  return (
    <M.Container>
      <M.GroupContainer>
        <M.ContentsContainer>
          <Suspense fallback={<Skeleton />}>
            <WritingsInner />
          </Suspense>
        </M.ContentsContainer>
      </M.GroupContainer>
    </M.Container>
  );
}

export default MyWritings;
