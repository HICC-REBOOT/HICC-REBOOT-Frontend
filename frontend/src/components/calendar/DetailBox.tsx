import React from 'react';
import useModal from '@hooks/useCalendarModal';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { ReactComponent as PlusIcon } from '@assets/image/icon/plus.svg';
import useAuth from '@hooks/useAuth';
import useGetCalendarDayInfo from '@query/get/useGetCalendarDayInfo';
import * as D from './style/DetailBox.style';
import ScheduleCard from './ScheduleCard';

export default function DetailBox() {
  const isAdmin = useAuth();

  const { changeModalState, changeIsNewState, selectedDate } = useModal();

  const year = dayjs(selectedDate?.toString()).year();
  const month = dayjs(selectedDate?.toString()).month() + 1;
  const date = dayjs(selectedDate?.toString()).date();
  const { data: dayInfo } = useGetCalendarDayInfo({ year, month, date });

  const addNewSchedule = () => {
    changeIsNewState(true);
    changeModalState(true);
  };

  return (
    <D.Container>
      <D.Date>
        {dayjs(selectedDate as Date)
          .locale('ko')
          .format('YYYY.MM.DD ddd')}
      </D.Date>
      {dayInfo.map((info, i) => (
        <ScheduleCard dayInfo={info} key={i} />
      ))}
      {isAdmin && (
        <D.AddContainer onClick={addNewSchedule}>
          <PlusIcon />
          <D.AddText>새 일정 추가하기</D.AddText>
        </D.AddContainer>
      )}
    </D.Container>
  );
}
