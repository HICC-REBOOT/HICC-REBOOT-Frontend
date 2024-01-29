import { COOKIE_KEYS, STORE_KEYS } from '@constants/keys';
import { getCookie } from '@utils/cookie';
import { atom } from 'recoil';

const loginState = atom<boolean>({
  key: STORE_KEYS.LOGIN,
  default: getCookie(COOKIE_KEYS.IS_LOGIN) === 'true',
});

export default loginState;
