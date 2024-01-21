import React from 'react';
import { useParams } from 'react-router-dom';
import * as A from './ArticleDetail.style';
import { ArticleDetailType } from '../CommunityType';
import Content from './content/Content';
import Comment from './comment/Comment';

const data: ArticleDetailType = {
  grade: 'PRESIDENT',
  name: '장윤영3',
  date: '2024-01-09 16:49',
  appendices: [['www.ac.com', 'png']],
  board: 'FREE',
  subject: '저희 엠티 안 가나요?',
  content: '안녕 새내기들~~',
};

function ArticleDetail() {
  const { id } = useParams();

  return (
    <>
      <A.Container>
        <Content id={Number(id)} data={data} />
      </A.Container>
      <Comment id={Number(id)} />
    </>
  );
}

export default ArticleDetail;
