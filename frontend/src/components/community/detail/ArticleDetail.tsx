import React from 'react';
import { useParams } from 'react-router-dom';
import * as A from './ArticleDetail.style';
import { ArticleDetailType } from '../CommunityType';
import Content from './content/Content';
import Comment from './comment/Comment';
import WriteComment from './comment/WriteComment';

const data: ArticleDetailType = {
  articleId: 1,
  grade: 'PRESIDENT',
  name: '장윤영3',
  date: '2024-01-09 16:49',
  urls: [['www.ac.com', 'png']],
  isMine: true,
  board: 'FREE',
  subject: '저희 엠티 안 가나요?',
  content: '안녕 새내기들~~',
};

function ArticleDetail() {
  const { id } = useParams();

  const articleId = Number(id);

  return (
    <>
      <A.Wrapper>
        <A.Container>
          <Content id={articleId} data={data} />
        </A.Container>
        <Comment id={articleId} />
      </A.Wrapper>
      <WriteComment />
    </>
  );
}

export default ArticleDetail;
