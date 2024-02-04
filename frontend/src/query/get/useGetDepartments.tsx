import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface Departments {
  map: any;
  timestamp: string;
  statusCode: string;
  data: [
    {
      name: string;
    },
  ];
  success: boolean;
}

function useGetDepartments() {
  const fetchDepartments = async () => {
    const response = await request<null, Departments, null>({
      uri: `/api/auth/departments`,
      method: 'get',
    });

    return response;
  };

  const { data } = useSuspenseQuery({
    queryKey: ['get-departments'],
    queryFn: fetchDepartments,
  });

  return { departments: data };
}

export default useGetDepartments;
