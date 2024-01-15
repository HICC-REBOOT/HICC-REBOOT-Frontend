import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

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
