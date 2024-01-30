import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface Members {
  content: [
    {
      grade: string;
      name: string;
      id: string;
      major: string;
      phone_number: string;
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

function useGetMembers() {
  const fetchMembers = async () => {
    const response = await request<null, Members, null>({
      uri: `/api/admin/members?page=0&size=10`,
      method: 'get',
    });

    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: ['get-members'],
    queryFn: fetchMembers,
  });

  return { data };
}

export default useGetMembers;
