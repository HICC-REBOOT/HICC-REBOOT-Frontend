import { DeviceProvider } from '@assets/mediaQuery';
import hexToRGBA from '@utils/hexToRgba';
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

  &:first-child {
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }

  &:last-child {
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }

  &:not(:first-child) {
    border-top: none;
  }
`;

export const SubjectPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87.5%;
  height: 2.4rem;

  background-color: ${(props) => hexToRGBA(props.theme.colors.white, 0.1)};
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

  cursor: pointer;
`;

export const RestContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const WriterPart = styled.div`
  display: flex;
  align-items: center;
`;

export const GradeTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  width: 5.3rem;
  height: 2.6rem;
  border-radius: 2rem;
  background: ${(props) => hexToRGBA(props.theme.colors.white, 0.1)};
`;

export const Writer = styled.div`
  width: 3.5rem;
  height: 1.6rem;
  background: ${(props) => hexToRGBA(props.theme.colors.grey002)};
`;

export const WriteTime = styled.div`
  width: 8.4rem;
  height: 1.6rem;
  background-color: ${(props) => hexToRGBA(props.theme.colors.white, 0.1)};
`;
