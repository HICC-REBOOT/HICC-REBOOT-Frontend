import React from 'react';
import dayjs from 'dayjs';
import useModal from '@hooks/useCalendarModal';
import * as C from './style/CalendarGrid.style';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarGrid() {
  const { selectedDate, setSelectedDate } = useModal();

  return (
    <C.CustomCalendar
      onChange={setSelectedDate}
      value={selectedDate}
      locale="ko-KR"
      formatDay={(locale, date) => dayjs(date).format('D')}
      formatMonthYear={(locale, date) => dayjs(date).format('YYYY.MM')}
      minDetail="month"
      formatShortWeekday={(locale, date) => dayjs(date).format('ddd').toUpperCase()}
    />
  );
}
