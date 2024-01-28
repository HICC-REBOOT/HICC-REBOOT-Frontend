import { Grade } from '@components/type/CommonType';
import { QUERY_KEYS } from '@constants/keys';
import { useQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface UserInfo {
  id: number;
  name: string;
  grade: Grade;
}

function useGetUserInfo() {
  const fetchUserInfo = async () => {
    const response = await request<null, UserInfo, null>({
      uri: '/api/auth/info',
      method: 'get',
    });

    return response.data;
  };

  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.GET_USERINFO],
    queryFn: fetchUserInfo,
    enabled: false,
  });

  return {
    userinfo: data,
    fetchUserInfo: refetch,
  };
}

export default useGetUserInfo;
