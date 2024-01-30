import React, { useState } from 'react';
import { ArticleDetailType } from '@components/community/CommunityType';
import ROUTE from '@constants/route';
import { useNavigate } from 'react-router-dom';
import useDeleteArticle from '@query/delete/useDeleteArticle';
import COMMON from '@constants/common';
import useServerSidePagination from '@query/get/useServerSidePagination';
import { ImageUrl } from '@components/community/CommunityType';

import * as C from '@components/mypage/style/MyPageComponent.style';
import * as M from './style/MyWritings.style';

interface Article {
  subject: string;
  content: string;
  articleId: number;
  images: ImageUrl[];
}

function MyWritings() {
  const { curPageItem, renderPaginationBtnOrInfinityScroll } = useServerSidePagination<Article>({
    uri: '/api/profile/articles',
    size: COMMON.PAGINATION.SIZE,
  });

  const navigate = useNavigate();

  const goDetail = (article: Article) => {
    navigate(`${ROUTE.COMMUNITY.BASE}/${article.articleId}`);
  };

  const updateArticle = (article: Article) => {
    navigate(`${ROUTE.COMMUNITY.BASE}/${ROUTE.COMMUNITY.UPDATE}`, { state: article });
  };

  // const { deleteArticle, isPending } = useDeleteArticle({ articleId: number });

  // const deleteThisArticle = () => {
  //   if (window.confirm('정말 삭제하시겠습니까?')) {
  //     deleteArticle();
  //   }
  // };

  return (
    <M.Container>
      <M.GroupContainer>
        <M.ContentsContainer>
          {Object.values(curPageItem).map((item: Article, index) => (
            <M.ContentsArea key={index} onClick={() => goDetail(item)}>
              <M.ContentsTitle>{item.subject}</M.ContentsTitle>
              <M.Contents>{item.content}</M.Contents>
              <M.ModifyButton onClick={() => updateArticle(item)}>수정</M.ModifyButton>
              <M.DeleteButton>삭제</M.DeleteButton>
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
