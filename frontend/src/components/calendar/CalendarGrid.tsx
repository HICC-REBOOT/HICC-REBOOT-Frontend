import React, { useState } from 'react';
import dayjs from 'dayjs';
import * as C from './style/CalendarGrid.style';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarGrid() {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const dates = Array.from({ length: 31 }, (_, index) => index + 1);

  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const onClickDate = (i: number) => {
    setSelectedIdx(i);
  };

  const [value, onChange] = useState<Value>(new Date());
  return (
    <C.CustomCalendar
      onChange={onChange}
      value={value}
      locale="ko-KR"
      formatDay={(locale, date) => dayjs(date).format('D')}
      formatMonthYear={(locale, date) => dayjs(date).format('YYYY.MM')}
      minDetail="month"
      formatShortWeekday={(locale, date) => dayjs(date).format('ddd').toUpperCase()}
    />
  );
}
