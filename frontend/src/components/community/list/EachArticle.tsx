import React from 'react';
import { ReactComponent as Picture } from '@assets/image/icon/picture.svg';
import { GRADE_ENUM } from '@components/type/CommonType';
import isMoreThanExecutive from '@utils/isMoreThanExecutive';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';
import * as A from './EachArticle.style';
import { Article } from '../CommunityType';

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
      <A.RestPart>
        <A.WriterPart>
          <A.GradeTag show={isMoreThanExecutive(article.grade)}>{GRADE_ENUM[article.grade]}</A.GradeTag>
          <A.Writer>{article.name}</A.Writer>
        </A.WriterPart>
        <A.WriteTime>{article.date}</A.WriteTime>
      </A.RestPart>
    </A.Container>
  );
}

export default EachArticle;