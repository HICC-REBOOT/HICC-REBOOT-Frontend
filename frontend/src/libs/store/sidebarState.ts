import { STORE_KEYS } from '@constants/keys';
import { atom } from 'recoil';

const sidebarStore = atom<boolean>({
  key: STORE_KEYS.SIDEBAR,
  default: false,
});

export default sidebarStore;
