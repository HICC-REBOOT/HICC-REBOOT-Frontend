import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface MyArticles {
  content: [
    {
      article_id: number;
      subject: string;
      board: string;
      date: string;
    },
  ];
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
  last: false;
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

function useGetMyArticles(pageNumber: number) {
  const fetchMyArticles = async () => {
    const response = await request<null, MyArticles, null>({
      uri: `/api/profile/articles?page=${pageNumber}&size=10`,
      method: 'get',
    });

    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_MY_ARTICLES],
    queryFn: fetchMyArticles,
  });

  return { data };
}

export default useGetMyArticles;
