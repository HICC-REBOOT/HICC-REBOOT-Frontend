import React from 'react';
import useModal from '@hooks/useCalendarModal';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useRecoilValue } from 'recoil';
import { isAdminState } from '../../state/calendar';
import * as D from './style/DetailBox.style';
import ScheduleCard from './ScheduleCard';

export default function DetailBox() {
  const temp = [1, 1];

  const { changeModalState, changeIsNewState, selectedDate } = useModal();
  const isAdmin = useRecoilValue(isAdminState);

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
      {temp.map((_, i) => (
        <ScheduleCard key={i} />
      ))}
      {isAdmin && (
        <D.AddContainer onClick={addNewSchedule}>
          <D.AddImg />
          <D.AddText>새 일정 추가하기</D.AddText>
        </D.AddContainer>
      )}
    </D.Container>
  );
}
