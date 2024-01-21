import React from 'react';
import { ReactComponent as Picture } from '@assets/image/icon/picture.svg';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';
import * as A from './EachArticle.style';
import { Article } from '../CommunityType';
import WriteInfo from '../common/WriteInfo';

interface EachArticleProps {
  article: Article;
}

function EachArticle({ article }: EachArticleProps) {
  // 백엔드에서 받아와야하는 값
  const existPicture = true;

  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`${ROUTE.COMMUNITY.BASE}/${article.article_id}`);
  };

  return (
    <A.Container>
      <A.SubjectPart>
        <A.Subject onClick={goDetail}>{article.subject}</A.Subject>
        <Picture style={{ cursor: 'pointer', display: existPicture ? 'block' : 'none' }} />
      </A.SubjectPart>
      <WriteInfo grade={article.grade} name={article.name} date={article.date} />
    </A.Container>
  );
}

export default EachArticle;
