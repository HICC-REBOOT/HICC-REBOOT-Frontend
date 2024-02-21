import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface DataType {
  name: string;
}
interface Departments {
  timestamp: string;
  statusCode: string;
  data: DataType[];
  success: boolean;
  [propName: string]: any; // 이렇게 하면 map, filter, each 등의 추가 속성을 호출해도 오류메시지가 안뜬다.
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
    queryKey: [QUERY_KEYS.GET_DEPARTMENTS],
    queryFn: fetchDepartments,
  });

  return { departments: data };
}

export default useGetDepartments;
