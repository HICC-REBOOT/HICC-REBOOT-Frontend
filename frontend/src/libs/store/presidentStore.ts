import { STORE_KEYS } from '@constants/keys';
import { atom } from 'recoil';

const presidentStore = atom<boolean>({
  key: STORE_KEYS.PRESIDENT,
  default: false,
});

export default presidentStore;
