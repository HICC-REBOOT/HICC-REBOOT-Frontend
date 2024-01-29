import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  border: none;
  background-color: ${(props) => props.theme.colors.black};

  ${(props) => props.theme.media.mobile`
    max-width: 32.8rem;
  `};

  ${(props) => props.theme.media.tablet`
    max-width: 53.4rem;
  `};

  ${(props) => props.theme.media.desktop`
    max-width: 82.2rem;
    margin-top: 18.8rem;
  `};

  ${(props) => props.theme.media.wide`
    max-width: 82.2rem;
    margin-top: 18.8rem;
  `};
`;

// eslint 에러를 위해서 의미없는 div export
export const T = styled.div``;
