import React, { useEffect, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

import request from '@utils/request';
import PaginationComponent from '@libs/pagination/PaginationComponent';
import useInnerWidth from '@hooks/useInnerWidth';

interface UseServerSidePaginationProps {
  uri: string;
  size: number;
  sort?: string;
  search?: string;
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

// pagination에 필요한 파라미터들 (현재 페이지 번호, 페이지 크기, 정렬, 검색)
interface Pageable {
  page: number;
  size: number;
  sort?: string;
  search?: string;
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
}: UseServerSidePaginationProps): ReturnuseServerSidePagination<T> {
  const [data, setData] = useState<T[]>([]);
  const [dataLength, setDataLength] = useState<number>(0); // 데이터의 전체 길이
  const [page, setPage] = useState<number>(0); // 현재 페이지

  const [ref, inView] = useInView(); // 무한 스크롤 감지를 위해서
  const { innerWidth } = useInnerWidth();
  const [isLast, setIsLast] = useState<boolean>(false); // 무한스크롤일 때 마지막 정보인지를 서버로부터 받아옴d

  const [isInfinityScroll, setIsInfinityScroll] = useState<boolean>(
    innerWidth < 768,
  );

  const fetchPagiableData = async () => {
    const response = await request<
      null,
      ResponseServerSidePagination<T>,
      Pageable
    >({
      uri,
      method: 'get',
      params: {
        page,
        size,
        sort,
        search,
      },
    });

    return response.data;
  };

  const { data: cachingData } = useSuspenseQuery({
    queryKey: [
      'get-pagiable',
      { uri, size, sort, search, page, isInfinityScroll },
    ],
    queryFn: fetchPagiableData,
  });

  // 태블릿 이하로는 무한스크롤로 변동
  useEffect(() => {
    setIsInfinityScroll(innerWidth < 768);
  }, [innerWidth]);

  // 모드가 전환될 때마다 배열을 비워주고 페이지를 0으로 초기화시킨다.
  useEffect(() => {
    setPage(0);
    setData([]);
  }, [isInfinityScroll]);

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

    if (isInfinityScroll) {
      setData((prev) => [...prev, ...cachingData.content]);
      setIsLast(cachingData.last);
    }

    setDataLength(cachingData.totalElements);
  }, [cachingData, isInfinityScroll]);

  const onSetPage = (pageNum: number) => {
    setPage(pageNum - 1);
  };

  const renderPaginationBtn = (): React.JSX.Element => {
    return (
      <PaginationComponent
        page={page + 1}
        size={size}
        count={dataLength}
        pageRange={5}
        setPage={onSetPage}
      />
    );
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
    renderPaginationBtnOrInfinityScroll: isInfinityScroll
      ? renderNextAreaForInfinityScroll
      : renderPaginationBtn,
  };
}

export default useServerSidePagination;
