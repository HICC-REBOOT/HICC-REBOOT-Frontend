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
`;

export const RestPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const WriterPart = styled.div`
  display: flex;
  align-items: center;
`;

// 정의되어있지 않은 타이포, 추후에 수정 예정
export const GradeTag = styled.div`
  display: flex;
  padding: 0.5rem 1.2rem;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  border-radius: 2rem;
  background: ${(props) => hexToRGBA(props.theme.colors.white, 0.1)};

  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;

  white-space: nowrap;
  font-family: 'Source Sans Pro';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 1.6rem */
  letter-spacing: 0.05rem;
`;

// 정의되어있지 않은 타이포, 추후에 수정 예정
export const Writer = styled.div`
  color: ${(props) => props.theme.colors.grey002};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Source Sans Pro';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 1.6rem */
  letter-spacing: 0.05rem;
`;

// 정의되어있지 않은 타이포, 추후에 수정 예정
export const WriteTime = styled.div`
  color: ${(props) => props.theme.colors.white};
  text-align: right;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Source Sans Pro';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 1.6rem */
  letter-spacing: 0.05rem;
`;
