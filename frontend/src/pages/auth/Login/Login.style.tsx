import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';
import { Button, Input } from 'antd';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  padding: 2rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.4rem;
  min-height: 80vh;

  ${(props) => props.theme.media.desktop`
    padding: 22rem 0;
  `};
  ${(props) => props.theme.media.wide`
    padding: 22rem 0;
  `};
`;
export const Title = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography[DeviceProvider()].body};
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 32.8rem;
`;

export const Label = styled.div`
  ${(props) => props.theme.typography.common.caption2};
  color: ${(props) => props.theme.colors.point1};
  padding-left: 1.2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;

export const CustomInput = styled(Input)`
  ${(props) => props.theme.typography[DeviceProvider()].body};
  color: ${(props) => props.theme.colors.white};
  padding: 1.2rem;
  background-color: ${(props) => props.theme.colors.grey001};
  border-radius: 1.6rem;
`;

export const CustomPasswordInput = styled(Input.Password)`
  > input {
    ${(props) => props.theme.typography[DeviceProvider()].body};
    color: ${(props) => props.theme.colors.white};
  }
  border-radius: 1.6rem;
  padding: 1.2rem;
`;

export const ErrorMsg = styled.div`
  margin-top: 0.4rem;
  ${(props) => props.theme.typography.common.caption2};
  color: ${(props) => props.theme.colors.red};
  padding-left: 1.2rem;
  height: 1.6rem;
`;

export const CompleteBtn = styled(Button)`
  margin-top: 8.4rem;
  color: ${(props) => props.theme.colors.white};
  border-radius: 1.2rem;
  height: 4.6rem;
  width: 12.6rem;
  > span {
    ${(props) => props.theme.typography.common.button1};
  }
`;

export const PasswordIssue = styled.a`
  color: ${(props) => props.theme.colors.point2};
  ${(props) => props.theme.typography.common.caption1};
  align-self: flex-end;
  cursor: pointer;
`;
