import styled from 'styled-components';
import Calendar from 'react-calendar';
import { DeviceProvider } from '@assets/mediaQuery';
import 'react-calendar/dist/Calendar.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  width: 21rem;
  justify-content: space-between;
`;

export const Month = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].subtitle};
  color: ${(props) => props.theme.colors.white};
`;

export const MonthBtn = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.red};
  width: 2.4rem;
  height: 2.4rem;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  padding: 1.1rem;
`;
export const Days = styled.div`
  margin-top: 0.9rem;
  display: grid;
  grid-template-columns: repeat(7, 4.2rem);
  column-gap: calc((100% - 4.2rem * 7) / 6);
  width: 100%;
`;

export const Day = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.caption1};
  text-align: center;
`;

export const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 4.2rem);
  column-gap: calc((100% - 4.2rem * 7) / 6);
  width: 100%;
`;

export const DateWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  height: 6rem;
  border-radius: 0.8rem;
  background-color: ${(props) => (props.selected ? props.theme.colors.white : props.theme.colors.black)};
`;

export const Date = styled.div<{ selected: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  ${(props) => props.theme.typography[DeviceProvider()].body};
  color: ${(props) => (props.selected ? props.theme.colors.black : props.theme.colors.white)};
  text-align: center;
  margin-top: 0.4rem;
`;

export const MarkContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.4rem;
  justify-content: center;
`;
export const Mark = styled.div<{ type: number }>`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  background-color: ${(props) => {
    if (props.type === 1) return 'pink';
    if (props.type === 2) return 'skyblue';
    if (props.type === 3) return 'yellow';
    return 'pink';
  }};
`;

export const CustomCalendar = styled(Calendar)`
  color: white;
  background: ${(props) => props.theme.colors.black};
  width: 100%;
  border: none;

  // 달력 위에 화살표 & YYYY.MM
  .react-calendar__navigation {
    margin-bottom: 4.4rem;
    height: auto;
    justify-content: center;
    align-items: center;
  }
  // 달력 위 화살표 & YYYY.MM 각각 하나하나
  .react-calendar__navigation button:disabled {
    background-color: ${(props) => props.theme.colors.black};
    padding: 0 10%;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${(props) => props.theme.colors.black};
  }
  // 달력 위 화살표
  .react-calendar__navigation__arrow {
    width: 1.8rem;
    height: 1.8rem;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }
  // 달력 위 '<<' & '>>' 화살표 안 보이게
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    visibility: hidden;
  }
  // YYYY.MM 표시
  .react-calendar__navigation__label > span {
    color: white;
    ${(props) => props.theme.typography[DeviceProvider()].subtitle};
  }

  // 요일 전체
  .react-calendar__month-view__weekdays {
    margin-bottom: 1rem;
  }
  // 요일 하나
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.4rem 0;
  }
  // 요일 안에 글씨
  .react-calendar__month-view__weekdays__weekday > abbr {
    ${(props) => props.theme.typography.common.caption1};
    text-decoration: none;
  }

  // day 하나
  .react-calendar__tile {
    border-radius: 0.8rem;
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.typography[DeviceProvider()].body};
    align-items: flex-start;
    display: flex;
    padding: 0;
    justify-content: center;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: ${(props) => props.theme.colors.black};
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus,
  .react-calendar__tile--active {
    background-color: ${(props) => props.theme.colors.black};
  }

  // day 안에 있는 숫자
  .react-calendar__tile > abbr {
    border-radius: 0.8rem;
    height: 6rem;
    padding-top: 0.4rem;
    width: 4.2rem;
  }
  .react-calendar__tile--active:enabled:focus > abbr {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
  }
  .react-calendar__tile:enabled > abbr:hover,
  .react-calendar__tile:enabled > abbr:hover {
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};
  }

  // 오늘 날짜
  .react-calendar__tile--now {
    background: ${(props) => props.theme.colors.black};
  }
  // 오늘 날짜 안에 있는 숫자
  .react-calendar__tile--now > abbr {
    background-color: ${(props) => props.theme.colors.grey003};
    color: ${(props) => props.theme.colors.black};
  }

  // 다른 달에 있는 날짜들
  .react-calendar__month-view__days__day--neighboringMonth {
    color: white;
    opacity: 0.5;
  }
`;
