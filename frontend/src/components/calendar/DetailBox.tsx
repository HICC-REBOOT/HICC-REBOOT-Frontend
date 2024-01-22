import React from 'react';
import useModal from '@hooks/useCalendarModal';
import * as D from './style/DetailBox.style';
import ScheduleCard from './ScheduleCard';

export default function DetailBox() {
  const temp = [1, 1];

  const { changeModalState, changeIsNewState } = useModal();

  const addNewSchedule = () => {
    changeIsNewState(true);
    changeModalState(true);
  };

  return (
    <D.Container>
      <D.Date>2024.01.01 수</D.Date>
      {temp.map((_, i) => (
        <ScheduleCard key={i} />
      ))}
      <D.AddContainer onClick={addNewSchedule}>
        <D.AddImg />
        <D.AddText>새 일정 추가하기</D.AddText>
      </D.AddContainer>
    </D.Container>
  );
}
