import React from 'react';
import useDeleteMyArticle from '@query/delete/useDeleteMyArticle';

import * as W from '../style/MyWritings.style';

interface DeleteButtonProps {
  id: number;
}

function ArticleDeleteButton({ id }: DeleteButtonProps) {
  const { deleteArticle, isPending } = useDeleteMyArticle({ articleId: id });

  const deleteThisArticle = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteArticle();
    }
  };
  return (
    <W.DeleteButton onClick={() => deleteThisArticle()} disabled={isPending}>
      삭제
    </W.DeleteButton>
  );
}

export default ArticleDeleteButton;
