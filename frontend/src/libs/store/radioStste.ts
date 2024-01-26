import RadioType from '@components/common/radio/RadioType';
import { STORE_KEYS } from '@constants/keys';
import { atom } from 'recoil';

const radioStore = atom<RadioType | undefined>({
  key: STORE_KEYS.RADIO,
  default: undefined,
});

export default radioStore;
