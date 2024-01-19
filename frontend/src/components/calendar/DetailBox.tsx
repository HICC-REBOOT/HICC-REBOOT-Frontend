import React from 'react';
import * as D from './style/DetailBox.style';
import ScheduleCard from './ScheduleCard';

export default function DetailBox() {
  const temp = [1, 1];
  return (
    <D.Container>
      <D.Date>2024.01.01 수</D.Date>
      {temp.map((_, i) => (
        <ScheduleCard key={i} />
      ))}
    </D.Container>
  );
}
