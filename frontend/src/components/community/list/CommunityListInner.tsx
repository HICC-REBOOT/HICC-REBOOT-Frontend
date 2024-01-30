import React from 'react';
import useServerSidePagination from '@query/get/useServerSidePagination';
import COMMON from '@constants/common';
import { useOutletContext } from 'react-router-dom';
import OptionType from '@components/common/dropdown/OptionType';
import { GRADE } from '@components/type/CommonType';
import { Article, Board } from '../CommunityType';
import CurrentBoardContext from '../CurrentBoardContext';
import EachArticle from './EachArticle';

interface CommunityListInnerProps {
  currentOption: OptionType | null;
  searchQuery?: string;
  isOnlyExecutive: boolean;
}

function CommunityListInner({ searchQuery, currentOption, isOnlyExecutive }: CommunityListInnerProps) {
  const { currentBoard } = useOutletContext<CurrentBoardContext>();

  const executiveQuery = isOnlyExecutive ? GRADE.EXECUTIVE : GRADE.NORMAL;

  const { curPageItem, renderPaginationBtnOrInfinityScroll } = useServerSidePagination<Article>({
    uri: '/api/article',
    size: COMMON.PAGINATION.SIZE,
    board: currentBoard.value as Board,
    search: searchQuery,
    findBy: currentOption?.value,
    articleGrade: executiveQuery,
  });

  return (
    <>
      {curPageItem.map((article) => (
        <EachArticle key={article.articleId} article={article} />
      ))}
      {renderPaginationBtnOrInfinityScroll()}
    </>
  );
}

export default CommunityListInner;
