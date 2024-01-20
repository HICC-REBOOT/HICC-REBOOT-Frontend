import React from 'react';
import useServerSidePagination from '@query/get/useServerSidePagination';
import COMMON from '@constants/common';
import { useOutletContext } from 'react-router-dom';
import * as C from './CommunityListInner.style';
import { Article } from '../CommunityType';
import CurrentBoardContext from '../CurrentBoardContext';
import EachArticle from './EachArticle';

function CommunityListInner() {
  const { currentBoard } = useOutletContext<CurrentBoardContext>();

  const dummyArticle: Article[] = [
    {
      article_id: 1,
      grade: 'EXECUTIVE',
      name: '장윤영3',
      date: '2024-01-09 16:49',
      board: 'FREE',
      subject: '저희 엠티 안 가나요?',
    },
    {
      article_id: 2,
      grade: 'EXECUTIVE',
      name: '장윤영3',
      date: '2024-01-09 16:49',
      board: 'FREE',
      subject: '저희 엠티 안 가나요?',
    },
    {
      article_id: 3,
      grade: 'EXECUTIVE',
      name: '장윤영3',
      date: '2024-01-09 16:49',
      board: 'FREE',
      subject: '저희 엠티 안 가나요?',
    },
    {
      article_id: 4,
      grade: 'EXECUTIVE',
      name: '장윤영3',
      date: '2024-01-09 16:49',
      board: 'FREE',
      subject: '저희 엠티 안 가나요?',
    },
  ];

  // const { curPageItem, renderPaginationBtnOrInfinityScroll } = useServerSidePagination<Article>({
  //   uri: '/api/article',
  //   size: COMMON.PAGINATION.SIZE,
  //   board: currentBoard.value as Board,
  // });
  return (
    <C.Container>
      {dummyArticle.map((article) => (
        <EachArticle key={article.article_id} article={article} />
      ))}
    </C.Container>
  );
}

export default CommunityListInner;
