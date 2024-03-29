import { DeviceProvider } from '@assets/mediaQuery';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;

  border: 0.05rem solid ${(props) => props.theme.colors.grey001};

  &:nth-child(2) {
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }

  &:nth-last-child(2) {
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }

  &:not(:first-child) &:not(:nth-child(2)) {
    border-top: none;
  }
`;

export const SubjectAndImageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Subject = styled.div`
  width: 100%;
  margin-right: 1.2rem;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${(props) => props.theme.typography[DeviceProvider()].body};
  overflow: hidden;

  cursor: pointer;
`;
