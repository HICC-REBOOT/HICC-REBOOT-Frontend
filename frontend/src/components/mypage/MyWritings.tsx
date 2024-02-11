import React from 'react';
import ROUTE from '@constants/route';
import { useNavigate } from 'react-router-dom';
import COMMON from '@constants/common';
import useServerSidePagination from '@query/get/useServerSidePagination';
import { ArticleDetailType } from '@components/community/CommunityType';

import * as C from '@components/mypage/style/MyPageComponent.style';
import * as M from './style/MyWritings.style';
import DeleteButton from './button/ArticleDeleteButton';
import ModifyButton from './button/ModifyButton';

function MyWritings() {
  const { curPageItem, renderPaginationBtnOrInfinityScroll } = useServerSidePagination<ArticleDetailType>({
    uri: '/api/profile/articles',
    size: COMMON.PAGINATION.SIZE,
  });

  const navigate = useNavigate();

  const goDetail = (article: ArticleDetailType) => {
    navigate(`${ROUTE.COMMUNITY.BASE}/${article.articleId}`);
  };

  return (
    <M.Container>
      <M.GroupContainer>
        <M.ContentsContainer>
          {Object.values(curPageItem).map((item: ArticleDetailType, index) => (
            <M.ContentsArea key={index}>
              <M.ContentsTitle onClick={() => goDetail(item)}>{item.subject}</M.ContentsTitle>
              <M.Contents onClick={() => goDetail(item)}>{item.content}</M.Contents>
              <ModifyButton articleId={item.articleId}></ModifyButton>
              <DeleteButton id={item.articleId}></DeleteButton>
              <M.Divider />
            </M.ContentsArea>
          ))}
          <C.PageSelectArea>{renderPaginationBtnOrInfinityScroll()}</C.PageSelectArea>
        </M.ContentsContainer>
      </M.GroupContainer>
    </M.Container>
  );
}

export default MyWritings;
