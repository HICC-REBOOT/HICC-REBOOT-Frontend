import { atom } from 'recoil';

export const modalState = atom<boolean>({
  key: 'modalState',
  default: false,
});
export const isNewScheduleState = atom<boolean>({
  key: 'isNewScheduleState',
  default: false,
});
