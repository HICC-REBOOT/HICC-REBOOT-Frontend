import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import useModal from '@hooks/useCalendarModal';
import { MonthSchedule } from './CalendarType';
import * as C from './style/CalendarGrid.style';

interface CalendarGridProps {
  monthInfo: MonthSchedule[];
}

export default function CalendarGrid({ monthInfo }: CalendarGridProps) {
  const { selectedDate, setSelectedDate } = useModal();

  useEffect(() => {
    console.log(monthInfo);
  }, []);

  return (
    <C.CustomCalendar
      onChange={setSelectedDate}
      value={selectedDate}
      locale="ko-KR"
      formatDay={(locale, currentDate) => dayjs(currentDate).format('D')}
      formatMonthYear={(locale, currentDate) => dayjs(currentDate).format('YYYY.MM')}
      minDetail="month"
      formatShortWeekday={(locale, currentDate) => dayjs(currentDate).format('ddd').toUpperCase()}
      tileContent={({ date: currentDate, view }) => {
        const isInfoExist = monthInfo.find((info) => info.date === dayjs(currentDate).format('YYYY-MM-DD'));
        if (isInfoExist) {
          return (
            <C.DotContainer>
              <C.Dot type={isInfoExist.type} />
            </C.DotContainer>
          );
        }
        return null;
      }}
    />
  );
}
