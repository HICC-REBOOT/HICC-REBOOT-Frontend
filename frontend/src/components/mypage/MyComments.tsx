import React, { Suspense } from 'react';
import Skeleton from '@components/community/loading/Skeleton';
import * as M from './style/MyComments.style';
import CommentsInner from './mypage/CommentsInner';

function MyComments() {
  return (
    <M.Container>
      <M.GroupContainer>
        <M.ContentsContainer>
          <Suspense fallback={<Skeleton />}>
            <CommentsInner />
          </Suspense>
        </M.ContentsContainer>
      </M.GroupContainer>
    </M.Container>
  );
}

export default MyComments;
