import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';
import { DatePicker, TimePicker } from 'antd';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 0.8rem;
`;

export const DateWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 0.8rem;
  padding: 0.4rem 0 0.4rem 1.2rem;
`;

export const CustomDatePicker = styled(DatePicker)`
  .ant-picker {
    padding: 0;
  }

  .ant-picker-input > input {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.typography.common.caption1};
    text-align: center;
  }
`;

export const CustomTimePicker = styled(TimePicker)`
  .ant-picker-input {
  }

  .ant-picker-input > input {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.typography[DeviceProvider()].body};
    width: auto;
    box-sizing: content-box;
  }
`;

export const NextIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.red};
`;
