import { TOKEN_KEYS } from '@constants/keys';
import axiosInstance from '@utils/axios';
import { setCookie } from '@utils/cookie';
import request from '@utils/request';

interface LoginRequest {
  id: string;
  password: string;
}

interface Token {
  accessToken: string;
  refreshToken: string;
}

async function login() {
  const response = await request<LoginRequest, Token, null>({
    uri: '/api/auth/login',
    method: 'post',
  });

  // refresh token cookie save
  // http only 설정은 추후에 넣을 예정, https 쓸 때
  setCookie(TOKEN_KEYS.REFRESH_KEY, response.data.refreshToken);

  // 헤더에 access token 자동으로 설정
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
}

export default login;
