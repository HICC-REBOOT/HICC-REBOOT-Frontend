import React, { useState } from 'react';
import CalendarGrid from '@components/calendar/CalendarGrid';
import DetailBox from '@components/calendar/DetailBox';
import EditModal from '@components/calendar/EditModal';
import styled from 'styled-components';
import useGetCalendarMonthInfo from '@query/get/useGetCalendarMonthInfo';
import dayjs from 'dayjs';
import { isAdminState } from '../state/calendar';

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
  const setIsAdmin = useSetRecoilState<boolean>(isAdminState);
  const year = dayjs(new Date()).year();
  const month = dayjs(new Date()).month() + 1;
  const { data } = useGetCalendarMonthInfo({ year, month });
  return (
    <Container>
      <DetailBox />
      <EditModal />
    </Container>
  );
}
