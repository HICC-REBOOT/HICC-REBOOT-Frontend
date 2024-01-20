import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;

  padding: 2rem 1.6rem;
  border: none;
  background-color: ${(props) => props.theme.colors.black};
`;

// eslint 에러를 위해서 의미없는 div export
export const T = styled.div``;
