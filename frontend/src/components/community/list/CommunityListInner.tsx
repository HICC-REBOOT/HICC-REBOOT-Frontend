import React from 'react';
import useServerSidePagination from '@query/get/useServerSidePagination';
import COMMON from '@constants/common';
import { useOutletContext } from 'react-router-dom';
import OptionType from '@components/common/dropdown/OptionType';
import { Article } from '../CommunityType';
import CurrentBoardContext from '../CurrentBoardContext';
import EachArticle from './EachArticle';

interface CommunityListInnerProps {
  currentOption: OptionType | null;
  searchQuery?: string;
}

function CommunityListInner({ searchQuery, currentOption }: CommunityListInnerProps) {
  const { currentBoard } = useOutletContext<CurrentBoardContext>();

  const dummyArticle: Article[] = [
    {
      articleId: 1,
      grade: 'APPLICANT',
      name: '장윤영3',
      date: '2023-12-14T07:51:01.243',
      board: 'FREE',
      subject: '저희 엠티 안 가나요?',
    },
    {
      articleId: 2,
      grade: 'EXECUTIVE',
      name: '장윤영3',
      date: '2023-12-14T07:51:01.243',
      board: 'FREE',
      subject: '저희 엠티 안 가나요?',
    },
    {
      articleId: 3,
      grade: 'EXECUTIVE',
      name: '장윤영3',
      date: '2023-12-14T07:51:01.243',
      board: 'FREE',
      subject: '저희 엠티 안 가나요?',
    },
    {
      articleId: 4,
      grade: 'EXECUTIVE',
      name: '장윤영3',
      date: '2023-12-14T07:51:01.243',
      board: 'FREE',
      subject: '저희 엠티 안 가나요?',
    },
  ];

  // const { curPageItem, renderPaginationBtnOrInfinityScroll } = useServerSidePagination<Article>({
  //   uri: '/api/article',
  //   size: COMMON.PAGINATION.SIZE,
  //   board: currentBoard.value as Board,
  //   search: searchQuery,
  //   sort: currentOption?.value,
  // });
  return (
    <>
      {dummyArticle.map((article) => (
        <EachArticle key={article.articleId} article={article} />
      ))}
    </>
  );
}

export default CommunityListInner;
