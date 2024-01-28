import styled from 'styled-components';
import Calendar from 'react-calendar';
import { DeviceProvider } from '@assets/mediaQuery';
import 'react-calendar/dist/Calendar.css';

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

    ${(props) => props.theme.media.tablet`
      padding: 0;
    `}

    ${(props) => props.theme.media.desktop`
      padding: 0;
    `};

    ${(props) => props.theme.media.wide`
      padding: 0;
    `};
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

  .react-calendar__viewContainer {
    ${(props) => props.theme.media.desktop`
      background-color: ${props.theme.colors.grey001};
      border-radius: 1.6rem;
      padding: 2rem 6.4rem;
  `};
    ${(props) => props.theme.media.wide`
      background-color: ${props.theme.colors.grey001};
      border-radius: 1.6rem;
      padding: 2rem 6.4rem;
  `};
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

  //day 전체
  .react-calendar__month-view__days {
    ${(props) => props.theme.media.desktop`
      row-gap: 4rem;
  `};

    ${(props) => props.theme.media.wide`
      row-gap: 4rem;
  `};
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
    ${(props) => props.theme.media.desktop`
      background-color: ${props.theme.colors.grey001};
  `};

    ${(props) => props.theme.media.wide`
      background-color: ${props.theme.colors.grey001};
  `};
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus,
  .react-calendar__tile--active {
    background-color: ${(props) => props.theme.colors.black};

    ${(props) => props.theme.media.desktop`
      background-color: ${props.theme.colors.grey001};;
    `};

    ${(props) => props.theme.media.wide`
      background-color: ${props.theme.colors.grey001};
    `};
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

    ${(props) => props.theme.media.desktop`
      background-color: ${props.theme.colors.grey001};;
    `};

    ${(props) => props.theme.media.wide`
      background-color: ${props.theme.colors.grey001};
    `};
  }
  // 오늘 날짜 안에 있는 숫자
  .react-calendar__tile--now > abbr {
    background: ${(props) => props.theme.colors.black};

    ${(props) => props.theme.media.desktop`
      background-color: ${props.theme.colors.grey001};;
    `};

    ${(props) => props.theme.media.wide`
      background-color: ${props.theme.colors.grey001};
    `};
    color: ${(props) => props.theme.colors.point1};
  }

  // 다른 달에 있는 날짜들
  .react-calendar__month-view__days__day--neighboringMonth {
    color: white;
    opacity: 0.5;
  }
`;
