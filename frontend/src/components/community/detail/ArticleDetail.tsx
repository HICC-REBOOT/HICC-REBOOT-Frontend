import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ROUTE from '@constants/route';
import useGetArticleDetail from '@query/get/useGetArticleDetail';
import useAuth from '@hooks/useAuth';
import * as A from './ArticleDetail.style';
import Content from './content/Content';
import Comment from './comment/Comment';
import WriteComment from './comment/WriteComment';

function ArticleDetail() {
  const { id } = useParams();
  const articleId = Number(id);
  const { data } = useGetArticleDetail({ articleId });

  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  useEffect(() => {
    if (Number.isNaN(articleId)) {
      navigate(`${ROUTE.COMMUNITY.BASE}/${ROUTE.COMMUNITY.NOT_FOUND}`, { replace: true });
    }
  }, [articleId, navigate]);

  return (
    <>
      <A.Wrapper>
        <A.Container>
          <Content id={articleId} data={data} isAdmin={isAdmin} />
        </A.Container>
        <Comment id={articleId} isAdmin={isAdmin} />
      </A.Wrapper>
      <WriteComment id={articleId} />
      <A.WriteCommentBlank />
    </>
  );
}

export default ArticleDetail;
