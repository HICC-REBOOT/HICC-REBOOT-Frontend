import { Board } from '@components/community/CommunityType';
import { QUERY_KEYS } from '@constants/keys';
import ROUTE from '@constants/route';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface UpdatePostRequestBody {
  email: string;
  phoneNumber: string;
  department: string;
  password: string;
}

function usePatchProfile() {
  const changeProfile = async (data: UpdatePostRequestBody) => {
    await request<UpdatePostRequestBody, null, null>({
      uri: `/api/profile`,
      method: 'patch',
      data,
    });

    return true;
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.PATCH_PROFILE],
    mutationFn: changeProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PATCH_PROFILE, { uri: '/api/profile' }],
      });

      alert(`회원정보가 수정되었습니다.`);
    },
    onError: () => {
      alert(`에러가 발생했습니다.`);
    },
  });

  return {
    patchProfile: mutate,
    isPending,
  };
}

export default usePatchProfile;
