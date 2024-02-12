import { COOKIE_KEYS, QUERY_KEYS } from '@constants/keys';
import ROUTE from '@constants/route';
import useAuth from '@hooks/useAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeCookie } from '@utils/cookie';
import request from '@utils/request';
import { useNavigate } from 'react-router-dom';

function usePostLogout() {
  const requestLogout = async () => {
    await request<null, null, null>({
      uri: '/api/auth/logout',
      method: 'post',
    });

    return true;
  };

  const queryClient = useQueryClient();
  const { setIsLogin } = useAuth();
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationKey: [QUERY_KEYS.POST_LOGOUT],
    mutationFn: requestLogout,
    onSuccess: () => {
      // 로그아웃 할 때 내 정보 관련 전부 캐시 날리기
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.GET_PROFILE],
      });
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.GET_MY_ARTICLES],
      });
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.GET_MY_COMMENTS],
      });
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.GET_USERINFO],
      });

      // 로그아웃 시 쿠키에서 리프레시토큰 삭제
      removeCookie(COOKIE_KEYS.REFRESH_KEY);
      removeCookie(COOKIE_KEYS.IS_LOGIN);

      // 로그인 상태를 false
      setIsLogin(false);
      navigate(ROUTE.HOME);
    },
  });

  return {
    logout,
  };
}

export default usePostLogout;
