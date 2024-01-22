/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

export const Title = styled.div`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography[DeviceProvider()].body}
`;
export const TermBox = styled.div`
  display: flex;
  width: 32.8rem;
  height: 10.9rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.grey001};
`;
export const TextArea = styled.div`
  width: 28.6rem;
  height: 8.3046rem;
  flex-shrink: 0;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption2}
`;
export const ScrollBal = styled.div`
  width: 0.5rem;
  height: 9.3rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.15);
`;
export const CheckerWrapper = styled.div`
  display: flex;
  width: 32.8rem;
  height: 5.4rem;
`;
export const Essential = styled.div`
  display: flex;
  width: 3.3rem;
  height: 2rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: var(--Column, 0.4rem);
  background: var(--point-110, rgba(91, 78, 245, 0.1));
`;
export const EssentialText = styled.div`
  color: ${(props) => props.theme.colors.point1};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption2}
`;
export const CheckText = styled.div`
  width: 22.4rem;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const CheckBox = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`;
export const CountinueButton = styled.div`
  display: flex;
  width: 12.6rem;
  height: 4.6rem;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 1.2rem;
  background: ${(props) => props.theme.colors.grey002};
`;
