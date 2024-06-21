import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';

import useInfinityScroll from '@query/get/useInfinityScroll';
import COMMON from '@constants/common';

import * as C from '@components/mypage/style/MyPageComponent.style';
import * as M from '../style/MyComments.style';
import DeleteButton from '../button/CommentDeleteButton';

interface Comment {
  articleId: number; // 게시글 ID
  commentId: number; // 댓글 ID
  subject: string; // 게시글 제목
  content: string; // 댓글 내용
}

function CommentsInner() {
  const { curPageItem, renderNextAreaForInfinityScroll } = useInfinityScroll<Comment>({
    uri: '/api/profile/comments',
    size: COMMON.PAGINATION.SIZE,
  });

  const navigate = useNavigate();

  const goDetail = (article: Comment) => {
    navigate(`${ROUTE.COMMUNITY.BASE}/${article.articleId}`);
  };
  return (
    <>
      {curPageItem.map((item: Comment, index: number) => (
        <M.ContentsArea key={index} onClick={() => goDetail(item)}>
          <M.ContentsTitle>{item.subject}</M.ContentsTitle>
          <M.Contents>{item.content}</M.Contents>
          <DeleteButton articleId={item.articleId} commentId={item.commentId}></DeleteButton>
          <M.Divider />
        </M.ContentsArea>
      ))}
      <C.PageSelectArea>{renderNextAreaForInfinityScroll()}</C.PageSelectArea>
    </>
  );
}

export default CommentsInner;
