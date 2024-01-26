import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ROUTE from '@constants/route';
import * as A from './ArticleDetail.style';
import { ArticleDetailType } from '../CommunityType';
import Content from './content/Content';
import Comment from './comment/Comment';
import WriteComment from './comment/WriteComment';

const data: ArticleDetailType = {
  articleId: 1,
  grade: 'PRESIDENT',
  name: '장윤영3',
  date: '2023-12-14T07:51:01.243',
  urls: [
    ['https://images.coasterpedia.net/thumb/1/1a/AmusementPark.jpg/450px-AmusementPark.jpg', 'png'],
    ['https://images.coasterpedia.net/thumb/1/1a/AmusementPark.jpg/450px-AmusementPark.jpg', 'png'],
  ],
  isMine: true,
  board: 'FREE',
  subject: '저희 엠티 안 가나요?',
  content: '안녕 새내기들~~',
};

function ArticleDetail() {
  const { id } = useParams();
  const articleId = Number(id);

  const navigate = useNavigate();

  useEffect(() => {
    if (Number.isNaN(articleId)) {
      navigate(`${ROUTE.COMMUNITY.BASE}/${ROUTE.COMMUNITY.NOT_FOUND}`, { replace: true });
    }
  }, [articleId, navigate]);

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
