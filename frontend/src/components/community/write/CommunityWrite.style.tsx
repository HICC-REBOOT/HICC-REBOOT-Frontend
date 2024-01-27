import { DeviceProvider } from '@assets/mediaQuery';
import styled from 'styled-components';

export const Container = styled.form`
  padding: 2rem 1.6rem;

  & > * {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 18.7rem;
    }
  }
`;

export const InputTitle = styled.input`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem 2rem;

  border-radius: 0.8rem;
  border: none;
  background: ${(props) => props.theme.colors.grey001};

  color: ${(props) => props.theme.colors.grey002};
  font-feature-settings:
    'clig' off,
    'liga' off;

  ${(props) => props.theme.typography[DeviceProvider()].body};
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.grey002};
  }
`;

export const UploadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.6rem;
  margin: 0 auto;
  padding: 1rem 2rem;

  border: none;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.colors.point1};

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};

  &:disabled {
    background-color: ${(props) => props.theme.colors.black};
  }
`;
