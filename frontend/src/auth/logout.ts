import { COOKIE_KEYS } from '@constants/keys';
import { removeCookie } from '@utils/cookie';
import request from '@utils/request';

async function logout() {
  await request<null, null, null>({
    uri: '/api/logout',
    method: 'patch',
  });

  // 로그아웃 시 쿠키에서 리프레시토큰 삭제
  removeCookie(COOKIE_KEYS.REFRESH_KEY);
}

export default logout;
