import React, { useState } from 'react';
import COMMON from '@constants/common';
import useServerSidePagination from '@query/get/useServerSidePagination';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';
import * as C from '@components/mypage/style/MyPageComponent.style';
import * as M from './style/MyComments.style';

interface Comment {
  articleId: number; // 게시글 ID
  commentId: number; // 댓글 ID
  subject: string; // 게시글 제목
  content: string; // 댓글 내용
}

function MyComments() {
  const { curPageItem, renderPaginationBtnOrInfinityScroll } = useServerSidePagination<Comment>({
    uri: '/api/profile/comments',
    size: COMMON.PAGINATION.SIZE,
  });
  console.log(curPageItem);

  const navigate = useNavigate();

  const goDetail = (article: Comment) => {
    console.log(article.articleId);
    navigate(`${ROUTE.COMMUNITY.BASE}/${article.articleId}`);
  };

  return (
    <M.Container>
      <M.GroupContainer>
        <M.ContentsContainer>
          {Object.values(curPageItem).map((item: Comment, index: number) => (
            <M.ContentsArea key={index} onClick={() => goDetail(item)}>
              <M.ContentsTitle>{item.subject}</M.ContentsTitle>
              <M.Contents>{item.content}</M.Contents>
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

export default MyComments;
