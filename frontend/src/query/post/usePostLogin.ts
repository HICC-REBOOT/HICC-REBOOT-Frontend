import { COOKIE_KEYS, QUERY_KEYS, STORE_KEYS } from '@constants/keys';
import ROUTE from '@constants/route';
import useAuth from '@hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@utils/axios';
import { setCookie } from '@utils/cookie';
import request from '@utils/request';
import { useNavigate } from 'react-router-dom';

interface LoginRequest {
  studentNumber: string;
  password: string;
}

interface Token {
  accessToken: string;
  refreshToken: string;
}

function usePostLogin() {
  const requestLogin = async ({ studentNumber, password }: LoginRequest) => {
    const response = await request<LoginRequest, Token, null>({
      uri: '/api/auth/login',
      method: 'post',
      data: {
        studentNumber,
        password,
      },
    });

    return response.data;
  };

  const { setIsLogin } = useAuth();
  const navigate = useNavigate();

  const { mutate: login } = useMutation({
    mutationKey: [QUERY_KEYS.POST_LOGIN],
    mutationFn: requestLogin,
    onSuccess: (data) => {
      // 로그인 실패
      if (data === undefined) {
        alert('로그인에 실패했습니다.');
        return;
      }

      // 정상 로그인
      // refresh token cookie save
      // http only 설정은 추후에 넣을 예정, https 쓸 때
      setCookie(COOKIE_KEYS.REFRESH_KEY, data.refreshToken);
      setCookie(COOKIE_KEYS.IS_LOGIN, 'true');

      // 헤더에 access token 자동으로 설정
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
      setIsLogin(true);

      // 만약 이전에 인증이 실패해서 로그인으로 접속했다면
      const prevPageInfo = sessionStorage.getItem(STORE_KEYS.PREV_PAGE);

      if (prevPageInfo !== null) {
        navigate(prevPageInfo);
        return;
      }

      // 로그인 후 메인페이지로 이동
      navigate(ROUTE.HOME);
    },
  });

  return {
    login,
  };
}

export default usePostLogin;
