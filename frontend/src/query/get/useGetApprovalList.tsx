import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface ApprovalList {
  content: [
    {
      id: number;
      department: string;
      name: string;
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
    unpaged: boolean;
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

function useGetApprovalList() {
  const fetchApprovalList = async () => {
    const response = await request<null, ApprovalList, null>({
      uri: `/api/admin/applicants?page=0&size=10`,
      method: 'get',
    });

    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: ['get-approval-list'],
    queryFn: fetchApprovalList,
  });

  return { data };
}

export default useGetApprovalList;
