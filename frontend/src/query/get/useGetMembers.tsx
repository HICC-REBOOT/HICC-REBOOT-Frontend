import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface Members {
  content: [
    {
      id: number;
      department: string;
      name: string;
      grade: string;
      studentNumber: string;
      phoneNumber: string;
      approvedDate: null | string;
    },
  ];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: false;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

function useGetMembers() {
  const fetchMembers = async () => {
    const response = await request<null, Members, null>({
      uri: `/api/admin/members?page=0&size=10&sort=name`,
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
