import React from 'react';
import useDeleteMyComment from '@query/delete/useDeleteMyComment';
import confirm from '@components/common/popup/confirm/Confirm';

import * as W from '../style/MyWritings.style';

interface DeleteButtonProps {
  articleId: number;
  commentId: number;
}

function ArticleDeleteButton({ articleId, commentId }: DeleteButtonProps) {
  const { deleteComment, isPending } = useDeleteMyComment({ articleId, commentId });

  const deleteThisArticle = () => {
    confirm({
      content: '정말 삭제하시겠습니까?',
      okText: '삭제',
      cancelText: '취소',
      isDangerous: false,
      onOk: deleteComment,
    });
  };
  return (
    <W.DeleteButton onClick={() => deleteThisArticle()} disabled={isPending}>
      삭제
    </W.DeleteButton>
  );
}

export default ArticleDeleteButton;
