import React from 'react';
import useDeleteMyArticle from '@query/delete/useDeleteMyArticle';
import confirm from '@components/common/popup/confirm/Confirm';

import * as W from '../style/MyWritings.style';

interface DeleteButtonProps {
  id: number;
}

function ArticleDeleteButton({ id }: DeleteButtonProps) {
  const { deleteArticle, isPending } = useDeleteMyArticle({ articleId: id });

  const deleteThisArticle = () => {
    confirm({
      content: '정말 삭제하시겠습니까?',
      okText: '삭제',
      cancelText: '취소',
      isDangerous: false,
      onOk: deleteArticle,
    });
  };
  return (
    <W.DeleteButton onClick={() => deleteThisArticle()} disabled={isPending}>
      삭제
    </W.DeleteButton>
  );
}

export default ArticleDeleteButton;
