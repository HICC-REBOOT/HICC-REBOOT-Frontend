import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface ProfileInfo {
  grade: string;
  phone_number: string;
  id: string;
  major: string;
}

function useGetProfile() {
  const fetchProfile = async () => {
    const response = await request<null, ProfileInfo, null>({
      uri: '/api/profile',
      method: 'get',
    });

    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_PROFILE],
    queryFn: fetchProfile,
  });

  return { data };
}

export default useGetProfile;
