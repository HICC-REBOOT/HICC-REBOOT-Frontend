import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1.6rem;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 2rem;

  border: 0.05rem solid ${(props) => props.theme.colors.grey001};
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom: 0;
`;
