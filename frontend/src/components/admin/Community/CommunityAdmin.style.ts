import hexToRGBA from '@utils/hexToRgba';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;
  gap: 2rem;
`;

export const BoardListContainer = styled.div`
  display: flex;
  width: 32.8rem;
  padding: 1.6rem 2rem 2rem 2rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.8rem 1.6rem;
  flex-wrap: wrap;
  border-radius: 2rem;

  background-color: ${(props) => props.theme.colors.grey001};
  ${(props) => props.theme.media.tablet`
    width: 53.4rem;
  `};

  ${(props) => props.theme.media.desktop`
    width: 82.2rem;
  `};

  ${(props) => props.theme.media.wide`
    width: 82.2rem;
  `};
`;

export const BoardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0.5rem 0;

  ${(props) => props.theme.typography.common.caption1}
  color: ${(props) => props.theme.colors.white};
`;

export const BoardInput = styled.input`
  width: 15rem;
  height: 3.6rem;
  padding: 0.8rem 1.6rem;

  border-radius: 1rem;
  border: none;

  background-color: ${(props) => (props.disabled ? 'transparent' : props.theme.colors.grey004)};

  &:disabled {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export const AddButton = styled.button`
  margin-right: 0.5rem;
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => hexToRGBA(props.theme.colors.grey002, 0.3)};

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.caption1};
`;
