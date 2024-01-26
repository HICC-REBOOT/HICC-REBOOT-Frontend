import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface MyComments {
  content: [
    {
      article_id: number;
      content: string;
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

function useGetMyComments(pageNumber: number) {
  const fetchMyComments = async () => {
    const response = await request<null, MyComments, null>({
      uri: `/api/profile/comments?page={${pageNumber}}&size=10`,
      method: 'get',
    });

    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_MY_COMMENTS],
    queryFn: fetchMyComments,
  });

  return { data };
}

export default useGetMyComments;
