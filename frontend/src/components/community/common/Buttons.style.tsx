import hexToRGBA from '@utils/hexToRgba';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  & > button {
    &:first-child {
      margin-right: 0.4rem;
    }
  }
`;

export const NormalButton = styled.button<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => hexToRGBA(props.theme.colors.grey002, 0.3)};

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.caption1};
`;

export const DangerousButton = styled.button<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => hexToRGBA(props.theme.colors.red, 0.1)};

  color: ${(props) => props.theme.colors.red};
  ${(props) => props.theme.typography.common.caption1};
`;
