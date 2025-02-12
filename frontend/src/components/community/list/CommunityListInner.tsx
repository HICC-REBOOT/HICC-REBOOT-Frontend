import React from 'react';
import useInfinityScroll from '@query/get/useInfinityScroll';
import COMMON from '@constants/common';
import { useOutletContext } from 'react-router-dom';
import OptionType from '@components/common/dropdown/OptionType';
import { GRADE } from '@components/type/CommonType';
import { Article } from '../CommunityType';
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

  const { curPageItem, renderNextAreaForInfinityScroll } = useInfinityScroll<Article>({
    uri: '/api/article',
    size: COMMON.PAGINATION.SIZE,
    board: parseInt(currentBoard.value, 10),
    search: searchQuery,
    findBy: currentOption?.value,
    articleGrade: executiveQuery,
  });

  return (
    <>
      {curPageItem.map((article) => (
        <EachArticle key={article.articleId} article={article} />
      ))}
      {renderNextAreaForInfinityScroll()}
    </>
  );
}

export default CommunityListInner;
