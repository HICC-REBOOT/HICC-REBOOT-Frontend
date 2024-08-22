type ACADEMIC = 'ACADEMIC';
type AMITY = 'AMITY';
type SCHOOL_EVENT = 'SCHOOL_EVENT';
type ETC = 'ETC';

export type ScheduleType = ACADEMIC | AMITY | SCHOOL_EVENT | ETC;

// 월별 일정 조회
export interface MonthSchedule {
  name: string;
  scheduleId: number;
  startDateTime: string;
  endDateTime: string;
  dates: string[];
  type: ScheduleType;
  content: string;
}

// 일별 일정 조회
export interface DaySchedule {
  name: string;
  content: string;
  type: ScheduleType;
  scheduleId: number;
  startDateTime: string;
  endDateTime: string;
}
