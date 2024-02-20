import { QUERY_KEYS } from '@constants/keys';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';
import ROUTE from '@constants/route';
import usePostLogout from '@query/post/usePostLogout';

function useDeleteProfile() {
  const { logout } = usePostLogout();
  const deleteProfile = async () => {
    await request<null, null, null>({
      uri: `/api/profile`,
      method: 'delete',
    });

    return true;
  };

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.Delete_PROFILE],
    mutationFn: deleteProfile,
    onSuccess: () => {
      // 회원탈퇴이므로 로그아웃 후 캐시 초기화
      logout();
      alert(`회원탈퇴가 되었습니다.`);

      navigate(`${ROUTE.HOME}`);
    },
  });

  return {
    deleteProfile: mutate,
    isPending,
  };
}

export default useDeleteProfile;
