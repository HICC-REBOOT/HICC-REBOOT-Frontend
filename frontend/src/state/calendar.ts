import { atom } from 'recoil';

export const modalState = atom<boolean>({
  key: 'modalState',
  default: false,
});
export const isNewScheduleState = atom<boolean>({
  key: 'isNewScheduleState',
  default: false,
});

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
export const selectedDateState = atom<Value>({
  key: 'selectedDateState',
  default: new Date(),
});
export const currentCalendarViewState = atom<Value>({
  key: 'currentCalendarViewState',
  default: new Date(),
});

});
