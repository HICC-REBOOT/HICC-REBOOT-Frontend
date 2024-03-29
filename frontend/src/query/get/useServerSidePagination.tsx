import React, { useEffect, useState } from 'react';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

import request from '@utils/request';
import PaginationComponent from '@components/common/pagination/PaginationComponent';
import { QUERY_KEYS } from '@constants/keys';
import useInfinityScrollProvider from '@hooks/useInfinityScrollProvider';
import { Board } from '@components/community/CommunityType';
import { Grade } from '@components/type/CommonType';

interface UseServerSidePaginationProps {
  uri: string;
  size: number;
  sort?: string;
  search?: string;
  board?: Board;
  articleGrade?: Grade;
  findBy?: string;
}

interface ResponseServerSidePagination<T> {
  content: T[];
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

// pagination에 필요한 파라미터들 (현재 페이지 번호, 페이지 크기, 정렬, 검색, 보드타입)
interface Pageable {
  page: number;
  size: number;
  sort?: string;
  search?: string;
  board?: Board;
  articleGrade?: Grade;
  findBy?: string;
}

interface ReturnuseServerSidePagination<T> {
  curPageItem: T[];
  renderPaginationBtnOrInfinityScroll: () => React.JSX.Element;
}

function useServerSidePagination<T>({
  uri,
  size,
  sort,
  search,
  board,
  articleGrade,
  findBy,
}: UseServerSidePaginationProps): ReturnuseServerSidePagination<T> {
  const [data, setData] = useState<T[]>([]);
  const [dataLength, setDataLength] = useState<number>(0); // 데이터의 전체 길이
  const [page, setPage] = useState<number>(0); // 현재 페이지

  const [ref, inView] = useInView(); // 무한 스크롤 감지를 위해서
  const [isLast, setIsLast] = useState<boolean>(false); // 무한스크롤일 때 마지막 정보인지를 서버로부터 받아옴d

  const { isInfinityScroll } = useInfinityScrollProvider();

  const fetchPagiableData = async () => {
    const response = await request<null, ResponseServerSidePagination<T>, Pageable>({
      uri,
      method: 'get',
      params: {
        page,
        size,
        sort,
        search,
        board,
        articleGrade,
        findBy,
      },
    });

    return response.data;
  };

  const { data: cachingData } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.PAGEABLE, { uri, size, sort, search, page, board, articleGrade, findBy }],
    queryFn: fetchPagiableData,
  });

  const queryClient = useQueryClient();

  // 페이지 이외의 데이터가 변했을 때 캐싱 날려버림, 데이터 무한 쌓임 현상 해결하기 위해서
  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEYS.PAGEABLE, { uri }],
    });
    setPage(0);
    setIsLast(false);
    setData([]);
  }, [uri, size, sort, search, board, articleGrade, findBy, queryClient, isInfinityScroll]);

  // 더 불러오기 공간이 관측되면 페이지를 1증가
  useEffect(() => {
    if (isInfinityScroll && inView && !isLast) {
      setPage((prev) => prev + 1);
    }
  }, [inView, isInfinityScroll, isLast]);

  useEffect(() => {
    if (!isInfinityScroll) {
      setData(cachingData.content);
    }

    if (isInfinityScroll && !isLast) {
      setData((prev) => [...prev, ...cachingData.content]);
      setIsLast(cachingData.last);
    }

    setDataLength(cachingData.totalElements);
  }, [cachingData, isInfinityScroll, isLast]);

  const onSetPage = (pageNum: number) => {
    setPage(pageNum - 1);
  };

  const renderPaginationBtn = (): React.JSX.Element => {
    return <PaginationComponent page={page + 1} size={size} count={dataLength} pageRange={5} setPage={onSetPage} />;
  };

  const renderNextAreaForInfinityScroll = (): React.JSX.Element => {
    return (
      <div
        ref={ref}
        style={{
          marginTop: '4rem',
          width: '1rem',
          height: '1rem',
          display: isInfinityScroll ? 'block' : 'none',
        }}
      />
    );
  };

  return {
    curPageItem: data,
    renderPaginationBtnOrInfinityScroll: isInfinityScroll ? renderNextAreaForInfinityScroll : renderPaginationBtn,
  };
}

export default useServerSidePagination;
