import React from 'react';
import Pagination from 'react-js-pagination';
import * as P from './Pagination.style';

interface PaginationProps {
  page: number;
  size: number;
  count: number;
  pageRange: number;
  setPage: (page: number) => void;
}

function PaginationComponent({ page, size, count, pageRange, setPage }: PaginationProps) {
  return (
    <P.PaginationStyle>
      <Pagination
        activePage={page}
        itemsCountPerPage={size}
        totalItemsCount={count}
        pageRangeDisplayed={pageRange}
        hideFirstLastPages
        prevPageText={'<'}
        nextPageText={'>'}
        linkClassPrev="prev-button"
        linkClassNext="next-button"
        onChange={setPage}
      />
    </P.PaginationStyle>
  );
}

export default PaginationComponent;
