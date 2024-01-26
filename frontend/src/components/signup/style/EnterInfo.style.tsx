/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
`;

export const Label = styled.label`
  width: 23.8rem;
  color: ${(props) => props.theme.colors.point1};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption2}
  margin-bottom: 0.4rem;
  margin-left: 1.2rem;
`;
export const InputWrapper = styled.div`
  width: 32.8rem;
  height: 7.8rem;
`;
export const InputField = styled.div`
  display: flex;
  width: 32.8rem;
  height: 5.4rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
  background: ${(props) => props.theme.colors.grey001};
  justify-content: center;
  align-items: center;
`;
export const InputFieldInput = styled.input`
  width: 30.4rem;
  background: ${(props) => props.theme.colors.grey001};
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography[DeviceProvider()].body}
  border: none;
  outline: none;
`;
export const ErrorMessage = styled.div`
  width: 23.8rem;
  color: ${(props) => props.theme.colors.red};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption2}
  margin-left: 1.2rem;
`;
export const PhoneNumWrapper = styled.div`
  display: flex;
  width: 32.8rem;
  justify-content: space-between;
`;
export const PhoneNumField = styled.div`
  display: flex;
  width: 10.1rem;
  height: 5.4rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.grey001};
  align-items: center;
  justify-content: center;
`;
export const PhoneNumFieldInput = styled.input`
  width: 7.6rem;
  background: ${(props) => props.theme.colors.grey001};
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography[DeviceProvider()].body}
  border: none;
  outline: none;
`;
