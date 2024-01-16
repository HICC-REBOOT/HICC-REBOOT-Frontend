import React, { useState } from 'react';
import * as C from './style/CalendarGrid.style';

export default function CalendarGrid() {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const dates = Array.from({ length: 31 }, (_, index) => index + 1);

  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const onClickDate = (i: number) => {
    setSelectedIdx(i);
  };
  return (
    <C.Container>
      <C.Top>
        <C.MonthBtn>{'<'}</C.MonthBtn>
        <C.Month>2023.01</C.Month>
        <C.MonthBtn>{'>'}</C.MonthBtn>
      </C.Top>
      <C.CalendarWrapper>
        <C.Days>
          {days.map((day, i) => (
            <C.Day key={i}>{day}</C.Day>
          ))}
        </C.Days>
        <C.DateContainer>
          {dates.map((date, i) => (
            <C.DateWrapper key={i} onClick={() => onClickDate(i)} selected={i === selectedIdx}>
              <C.Date selected={i === selectedIdx}>{date}</C.Date>
              <C.MarkContainer>
                {/* <C.Mark type={1} />
                <C.Mark type={2} />
                <C.Mark type={3} /> */}
              </C.MarkContainer>
            </C.DateWrapper>
          ))}
        </C.DateContainer>
      </C.CalendarWrapper>
    </C.Container>
  );
}
