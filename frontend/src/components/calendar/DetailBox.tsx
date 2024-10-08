import React from 'react';
import useModal from '@hooks/useCalendarModal';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import PlusIcon from '@assets/image/icon/plus.svg?react';
import useAuth from '@hooks/useAuth';
import useGetCalendarDayInfo from '@query/get/useGetCalendarDayInfo';
import * as D from './style/DetailBox.style';
import ScheduleCard from './ScheduleCard';

export default function DetailBox() {
  const { isAdmin } = useAuth();

  const { changeModalState, selectedDateInfo, changeScheduleId } = useModal();
  const selectedYear = dayjs(selectedDateInfo?.toString()).year();
  const selectedMonth = dayjs(selectedDateInfo?.toString()).month() + 1;
  const selectedDate = dayjs(selectedDateInfo?.toString()).date();
  const { data: dayInfo } = useGetCalendarDayInfo({ year: selectedYear, month: selectedMonth, date: selectedDate });

  const addNewSchedule = () => {
    changeScheduleId(-1);
    changeModalState(true);
  };

  return (
    <D.Container>
      <D.Date>
        {dayjs(selectedDateInfo as Date)
          .locale('ko')
          .format('YYYY.MM.DD ddd')}
      </D.Date>
      {dayInfo.length === 0
        ? !isAdmin && <D.NoSchedule>등록된 일정이 없습니다.</D.NoSchedule>
        : dayInfo.map((info, i) => <ScheduleCard dayInfo={info} key={i} />)}
      {isAdmin && (
        <D.AddContainer onClick={addNewSchedule}>
          <PlusIcon />
          <D.AddText>새 일정 추가하기</D.AddText>
        </D.AddContainer>
      )}
    </D.Container>
  );
}
