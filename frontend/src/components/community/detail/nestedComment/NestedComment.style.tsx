import hexToRGBA from '@utils/hexToRgba';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  margin-left: 1rem;
  padding: 1.2rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.grey001};
`;

export const P = styled.p`
  margin-top: 1rem;
  width: 100%;

  color: ${(props) => props.theme.colors.grey004};
  ${(props) => props.theme.typography.common.caption1};
`;

export const DeleteButton = styled.button<{ $isMine: boolean }>`
  display: ${(props) => (props.$isMine ? 'flex' : 'none')};
  margin-top: 1rem;
  padding: 0.8rem 1.2rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.8rem;
  background: ${(props) => hexToRGBA(props.theme.colors.red, 0.1)};

  color: ${(props) => props.theme.colors.red};
  ${(props) => props.theme.typography.common.caption1};
`;
