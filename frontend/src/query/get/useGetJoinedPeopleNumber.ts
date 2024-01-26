import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface JoinedPeople {
  number: number;
}

function useGetMemberCount() {
  const fetchGetMemberNumber = async () => {
    const response = await request<null, JoinedPeople, null>({
      uri: '/api/main/member-count',
      method: 'get',
    });

    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_MEMBER_COUNT],
    queryFn: fetchGetMemberNumber,
  });

  return { data };
}

export default useGetMemberCount;
