import { ScheduleType } from '@components/calendar/CalendarType';
import { atom } from 'recoil';
import dayjs, { Dayjs } from 'dayjs';

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

export const scheduleTypeState = atom<ScheduleType>({
  key: 'scheduleTypeState',
  default: 'ACADEMIC',
});

export const scheduleIdState = atom<number>({
  key: 'scheduleIdState',
  default: -1,
});

// 일정 추가
export const startTimeState = atom<Dayjs | null>({
  key: 'startTimeState',
  default: dayjs(new Date()),
});
export const endTimeState = atom<Dayjs | null>({
  key: 'endTimeState',
  default: dayjs(new Date()).add(1, 'hour'),
});
