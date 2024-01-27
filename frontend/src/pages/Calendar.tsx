import React from 'react';
import CalendarGrid from '@components/calendar/CalendarGrid';
import DetailBox from '@components/calendar/DetailBox';
import EditModal from '@components/calendar/EditModal';
import styled from 'styled-components';

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

export default function Calendar() {
  return (
    <Container>
      <CalendarGrid />
      <DetailBox />
      <EditModal />
    </Container>
  );
}
