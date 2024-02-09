import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface MajorInfo {
  value: number;
  label: string;
}

function useGetProfile() {
  const fetchProfile = async () => {
    const response = await request<null, MajorInfo, null>({
      uri: '/api/auth/departments',
      method: 'get',
    });

    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_MAJORS],
    queryFn: fetchProfile,
  });

  return { data };
}

export default useGetProfile;
