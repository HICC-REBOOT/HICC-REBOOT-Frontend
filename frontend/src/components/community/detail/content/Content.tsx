import React from 'react';
import WriteInfo from '@components/community/common/WriteInfo';
import { ArticleDetailType } from '@components/community/CommunityType';
import Buttons from '@components/community/common/Buttons';
import * as C from './Content.style';

interface ContentProps {
  id: number;
  data: ArticleDetailType;
}

function Content({ id, data }: ContentProps) {
  const updateArticle = (articleId: number) => {};
  const deleteArticle = (articleId: number) => {};

  return (
    <>
      <C.Subject>{data.subject}</C.Subject>
      <WriteInfo grade={data.grade} name={data.name} date={data.date} />
      <C.Content>{data.content}</C.Content>
      <Buttons
        normal={{ label: '수정', onClick: () => updateArticle(id) }}
        dangerous={{ label: '삭제', onClick: () => deleteArticle(id) }}
      />
    </>
  );
}

export default Content;
