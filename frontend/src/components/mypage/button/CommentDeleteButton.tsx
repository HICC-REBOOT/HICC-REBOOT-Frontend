import React from 'react';
import useDeleteComment from '@query/delete/useDeleteComment';

import * as W from '../style/MyWritings.style';

interface DeleteButtonProps {
  articleId: number;
  commentId: number;
}

function ArticleDeleteButton({ articleId, commentId }: DeleteButtonProps) {
  const { deleteComment, isPending } = useDeleteComment({ articleId, commentId });

  const deleteThisArticle = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteComment();
    }
  };
  return (
    <W.DeleteButton onClick={() => deleteThisArticle()} disabled={isPending}>
      삭제
    </W.DeleteButton>
  );
}

export default ArticleDeleteButton;
