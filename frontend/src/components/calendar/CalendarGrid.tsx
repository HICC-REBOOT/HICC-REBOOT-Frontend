import React from 'react';
import dayjs from 'dayjs';
import useModal from '@hooks/useCalendarModal';
import useGetCalendarMonthInfo from '@query/get/useGetCalendarMonthInfo';
import { JSX } from 'react/jsx-runtime';
import { ScheduleType } from './CalendarType';
import * as C from './style/CalendarGrid.style';

interface ConvertedMonthInfo {
  date: string;
  type: ScheduleType[];
}

export default function CalendarGrid() {
  const { selectedDateInfo, setSelectedDateInfo, setCurrentCalendarView, currentCalendarView } = useModal();

  const currentYear = dayjs(currentCalendarView?.toString()).year();
  const currentMonth = dayjs(currentCalendarView?.toString()).month() + 1;
  const { data: monthInfo } = useGetCalendarMonthInfo({ year: currentYear, month: currentMonth });

  const convertMonthInfo = (): ConvertedMonthInfo[] => {
    const convertedMonthInfo: ConvertedMonthInfo[] = [];

    monthInfo.forEach((info) => {
      info.dates.forEach((date) => {
        const isDateExists = convertedMonthInfo.find((convertedItem) => convertedItem.date === date);

        if (isDateExists) {
          isDateExists.type.push(info.type);
        } else {
          convertedMonthInfo.push({
            date,
            type: [info.type],
          });
        }
      });
    });
    return convertedMonthInfo;
  };

  const showMarks = (types: ScheduleType[]) => {
    const marks: (string | JSX.Element)[] = [];
    const newTypes = types.filter((type, index) => types.indexOf(type) === index);
    newTypes.forEach((type) => {
      marks.push(<C.Dot type={type} />);
    });
    return marks;
  };

  return (
    <C.CustomCalendar
      onActiveStartDateChange={({ action, activeStartDate, value, view }) => {
        setCurrentCalendarView(activeStartDate);
      }}
      onChange={setSelectedDateInfo}
      value={selectedDateInfo}
      locale="ko-KR"
      formatDay={(locale, currentDate) => dayjs(currentDate).format('D')}
      formatMonthYear={(locale, currentDate) => dayjs(currentDate).format('YYYY.MM')}
      minDetail="month"
      formatShortWeekday={(locale, currentDate) => dayjs(currentDate).format('ddd').toUpperCase()}
      tileContent={({ date: currentDate, view }) => {
        const convertedMonthInfo = convertMonthInfo();
        const isInfoExist = convertedMonthInfo.find((info) => info.date === dayjs(currentDate).format('YYYY-MM-DD'));
        if (isInfoExist) {
          return <C.DotContainer>{showMarks(isInfoExist.type)}</C.DotContainer>;
        }
        return null;
      }}
    />
  );
}
