import { STORE_KEYS } from '@constants/keys';
import { atom } from 'recoil';

const nestedCommentStore = atom<number | null>({
  key: STORE_KEYS.NESTED_COMMENT,
  default: null,
});

export default nestedCommentStore;
