import React from 'react';
import CalendarGrid from '@components/calendar/CalendarGrid';
import * as C from './style/Calendar.style';

export default function Calendar() {
  return (
    <C.Container>
      <CalendarGrid />
      {/* <C.DetailBox>detail info</C.DetailBox> */}
    </C.Container>
  );
}
