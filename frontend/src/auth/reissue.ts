import { COOKIE_KEYS } from '@constants/keys';
import axiosInstance from '@utils/axiosInstance';
import { getCookie } from '@utils/cookie';

interface AccessToken {
  accessToken: string;
}

async function reissue() {
  const refresh = getCookie(COOKIE_KEYS.REFRESH_KEY);

  const response = await axiosInstance.get<AccessToken>('/api/auth/refresh', {
    headers: {
      'Authorization-refresh': `Bearer ${refresh}`,
    },
  });

  // 헤더에 access token 자동으로 설정
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;

  // 끊겼던 요청들을 재처리하기위해 access token return
  return response.data.accessToken;
}

export default reissue;
