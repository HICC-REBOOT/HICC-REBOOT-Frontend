import React from 'react';
import ROUTE from '@constants/route';
import { useNavigate } from 'react-router-dom';
import COMMON from '@constants/common';
import useServerSidePagination from '@query/get/useServerSidePagination';
import { ArticleDetailType } from '@components/community/CommunityType';
import fetchArticleDetail from '@query/get/useGetArticleDetail';

import * as C from '@components/mypage/style/MyPageComponent.style';
import * as M from './style/MyWritings.style';
import DeleteButton from './button/ArticleDeleteButton';

async function updateArticle(data: ArticleDetailType, navigate: any) {
  try {
    const DetailData = await fetchArticleDetail({ articleId: data.articleId });
    navigate(`${ROUTE.COMMUNITY.BASE}/${ROUTE.COMMUNITY.UPDATE}`, { state: DetailData });
  } catch (error) {
    // Handle error if needed
    console.error('Failed to fetch article details', error);
  }
}

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
              <M.ModifyButton onClick={() => updateArticle(item, navigate)}>수정</M.ModifyButton>
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
