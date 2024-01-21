import { DeviceProvider } from '@assets/mediaQuery';
import hexToRGBA from '@utils/hexToRgba';
import styled from 'styled-components';

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  width: 32.8rem;
  padding: 1.5rem;
  padding-right: 2rem;
  border: none;
  background-color: ${(props) => props.theme.colors.grey001};

  & > div {
    margin-right: 0.8rem;
  }
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.3rem;
  height: 2rem;
  padding: 1rem;

  gap: 1rem;
  flex-shrink: 0;

  background-color: ${(props) => hexToRGBA(props.theme.colors.point1, 0.1)};
  border-radius: 0.4rem;

  color: ${(props) => props.theme.colors.point1};
  font-feature-settings:
    'clig' off,
    'liga' off;

  ${(props) => props.theme.typography.common.caption2};
  white-space: nowrap;
`;

export const Label = styled.div<{ disabled: boolean }>`
  min-width: 22.4rem;
  color: ${(props) => (props.disabled ? props.theme.colors.grey002 : props.theme.colors.white)};
  ${(props) => props.theme.typography[DeviceProvider()].body};
`;
