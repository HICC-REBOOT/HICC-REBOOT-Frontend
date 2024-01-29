import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  padding: 2rem;
  border: 0.05rem solid ${(props) => props.theme.colors.grey001};
  border-bottom: 0;

  &:last-child {
    border-bottom: 0.05rem solid ${(props) => props.theme.colors.grey001};
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: 1rem 0;

  color: ${(props) => props.theme.colors.grey004};
  ${(props) => props.theme.typography.common.caption1};
`;
