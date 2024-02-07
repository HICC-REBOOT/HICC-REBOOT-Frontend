import { COOKIE_KEYS } from '@constants/keys';
import { axiosInstance } from '@utils/axios';
import { setCookie } from '@utils/cookie';
import request from '@utils/request';

interface LoginRequest {
  studentNumber: string;
  password: string;
}

interface Token {
  accessToken: string;
  refreshToken: string;
}

async function login({ studentNumber, password }: LoginRequest) {
  const response = await request<LoginRequest, Token, null>({
    uri: '/api/auth/login',
    method: 'post',
    data: {
      studentNumber,
      password,
    },
  });

  // 정상 로그인
  if (response.data !== undefined) {
    // refresh token cookie save
    // http only 설정은 추후에 넣을 예정, https 쓸 때
    setCookie(COOKIE_KEYS.REFRESH_KEY, response.data.refreshToken);
    setCookie(COOKIE_KEYS.IS_LOGIN, 'true');

    // 헤더에 access token 자동으로 설정
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
    return true;
  }

  return false;
}

export default login;
