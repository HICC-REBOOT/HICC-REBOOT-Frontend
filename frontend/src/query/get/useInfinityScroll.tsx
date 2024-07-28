import React, { useEffect } from 'react';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

import request from '@utils/request';
import { QUERY_KEYS } from '@constants/keys';
import { Board } from '@components/community/CommunityType';
import { Grade } from '@components/type/CommonType';

interface UseInfinityScrollProps {
  uri: string;
  size: number;
  sort?: string;
  search?: string;
  board?: Board;
  articleGrade?: Grade;
  findBy?: string;
}

interface ResponseInfinityScroll<T> {
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

interface ReturnUseInfinityScroll<T> {
  curPageItem: T[];
  renderNextAreaForInfinityScroll: () => React.JSX.Element;
}

function useInfinityScroll<T>({
  uri,
  size,
  sort,
  search,
  board,
  articleGrade,
  findBy,
}: UseInfinityScrollProps): ReturnUseInfinityScroll<T> {
  const [ref, inView] = useInView(); // 무한 스크롤 감지를 위해서

  const fetchNextPageData = async (page: number) => {
    const response = await request<null, ResponseInfinityScroll<T>, Pageable>({
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

  const { data, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: [QUERY_KEYS.PAGEABLE, { uri, size, sort, search, board, articleGrade, findBy }],
    queryFn: ({ pageParam }) => fetchNextPageData(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastData) => {
      if (lastData.last) return null;
      return lastData.pageable.pageNumber + 1;
    },
    select: (datalist) => datalist.pages.flatMap((page) => page.content),
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const renderNextAreaForInfinityScroll = (): React.JSX.Element => {
    return (
      <div
        ref={ref}
        style={{
          marginTop: '4rem',
          width: '1rem',
          height: '1rem',
          display: 'block',
        }}
      />
    );
  };

  return {
    curPageItem: data,
    renderNextAreaForInfinityScroll,
  };
}

export default useInfinityScroll;
