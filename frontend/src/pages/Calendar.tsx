import React from 'react';
import CalendarGrid from '@components/calendar/CalendarGrid';
import DetailBox from '@components/calendar/DetailBox';
import EditModal from '@components/calendar/EditModal';
import styled from 'styled-components';
import useGetCalendarMonthInfo from '@query/get/useGetCalendarMonthInfo';
import dayjs from 'dayjs';
import useModal from '@hooks/useCalendarModal';
import useGetCalendarDayInfo from '@query/get/useGetCalendarDayInfo';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  background-color: ${(props) => props.theme.colors.black};

  ${(props) => props.theme.media.tablet`
    padding: 6.6rem 2.4rem;
  `};

  ${(props) => props.theme.media.desktop`
    padding: 18.5rem 9.6rem;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 3.2rem;
  `};

  ${(props) => props.theme.media.wide`
    padding: 18.5rem 9.6rem;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 3.2rem;
  `};
`;

const TempBtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const TempBtn = styled.button`
  background-color: white;
  color: black;
`;

export default function Calendar() {
  const { currentCalendarView, selectedDateInfo } = useModal();
  const currentYear = dayjs(currentCalendarView?.toString()).year();
  const currentMonth = dayjs(currentCalendarView?.toString()).month() + 1;
  const { data: monthInfo } = useGetCalendarMonthInfo({ year: currentYear, month: currentMonth });

  const selectedYear = dayjs(selectedDateInfo?.toString()).year();
  const selectedMonth = dayjs(selectedDateInfo?.toString()).month() + 1;
  const selectedDate = dayjs(selectedDateInfo?.toString()).date();
  const { data: dayInfo } = useGetCalendarDayInfo({ year: selectedYear, month: selectedMonth, date: selectedDate });

  return (
    <Container>
      <CalendarGrid monthInfo={monthInfo} />
      <DetailBox dayInfo={dayInfo} />
      <EditModal />
    </Container>
  );
}
