import { DeviceProvider } from '@assets/mediaQuery';
import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  width: 100%;
  margin: 2rem 0;
  padding: 2rem 1.2rem;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;

  border-radius: 2rem;
  background: ${(props) => props.theme.colors.grey001};
`;

export const SelectPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.4rem;
`;

export const Manager = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OnlyManagerLabel = styled.label`
  margin-right: 0.9rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.caption1};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
`;

export const SearchPart = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 1.2rem;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.8rem;
  background: ${(props) => props.theme.colors.black};
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography[DeviceProvider()].body};
  font-feature-settings:
    'clig' off,
    'liga' off;

  &::placeholder {
    color: ${(props) => props.theme.colors.grey002};
  }
`;
