import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';
import * as A from './EachArticle.style';
import { Article } from '../CommunityType';
import WriteInfo from '../common/WriteInfo';

interface EachArticleProps {
  article: Article;
}

function EachArticle({ article }: EachArticleProps) {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`${ROUTE.COMMUNITY.BASE}/${article.articleId}`);
  };

  return (
    <A.Container>
      <A.Subject onClick={goDetail}>{article.subject}</A.Subject>
      <WriteInfo grade={article.grade} name={article.name} date={article.date} />
    </A.Container>
  );
}

export default EachArticle;
