import React from 'react';
import CalendarGrid from '@components/calendar/CalendarGrid';
import DetailBox from '@components/calendar/DetailBox';
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
`;

export default function Calendar() {
  return (
    <Container>
      <CalendarGrid />
      <DetailBox />
    </Container>
  );
}
