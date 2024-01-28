import { STORE_KEYS } from '@constants/keys';
import { atom } from 'recoil';

const adminState = atom<boolean>({
  key: STORE_KEYS.ADMIN,
  default: false,
});

export default adminState;
