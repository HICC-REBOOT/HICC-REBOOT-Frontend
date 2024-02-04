// 월별 일정 조회
export interface MonthSchedule {
  name: string;
  scheduleId: number;
  date: string;
  type: ScheduleType;
}
export type ScheduleType = ACADEMIC | AMITY | SCHOOL_EVENT | ETC;
type ACADEMIC = 'ACADEMIC';
type AMITY = 'AMITY';
type SCHOOL_EVENT = 'SCHOOL_EVENT';
type ETC = 'ETC';
