import { TOKEN_KEYS } from '@constants/keys';
import axiosInstance from '@utils/axios';
import { getCookie } from '@utils/cookie';
import request from '@utils/request';

interface AccessToken {
  accessToken: string;
}

// 백엔드와 조정 후에 확정
interface ReissueParameter {
  refresh: string;
}

async function reissue() {
  const refresh = getCookie(TOKEN_KEYS.REFRESH_KEY);

  const response = await request<null, AccessToken, ReissueParameter>({
    uri: '/api/refresh',
    method: 'get',
    params: {
      refresh,
    },
  });

  // 헤더에 access token 자동으로 설정
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;

  // 끊겼던 요청들을 재처리하기위해 access token return
  return response.data.accessToken;
}

export default reissue;
