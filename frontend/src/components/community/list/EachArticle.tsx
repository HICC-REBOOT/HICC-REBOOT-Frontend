import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';
import Image from '@assets/image/icon/picture.svg';
import * as A from './style/EachArticle.style';
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
      <A.SubjectAndImageInfo>
        <A.Subject onClick={goDetail}>{article.subject}</A.Subject>
        {article.imageExistence && <img src={Image} alt="" />}
      </A.SubjectAndImageInfo>
      <WriteInfo grade={article.grade} name={article.name} date={article.date} />
    </A.Container>
  );
}

export default EachArticle;
