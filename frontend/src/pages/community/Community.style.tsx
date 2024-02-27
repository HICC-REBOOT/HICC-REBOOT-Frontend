import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  border: none;
  background-color: ${(props) => props.theme.colors.black};

  ${(props) => props.theme.media.mobile`
    width: 100%;
    padding: 0 1.6rem;
    min-height: 50rem;
  `};

  ${(props) => props.theme.media.tablet`
    width: 100%;
    padding: 0 11.7rem;
    min-height: 70rem;
  `};

  ${(props) => props.theme.media.desktop`
    width: 100%;
    padding: 0 30.9rem;
    margin-top: 18.8rem;
    min-height: 160rem;
  `};

  ${(props) => props.theme.media.wide`
    width: 100%;
    padding: 0 30.9rem;
    margin-top: 18.8rem;
    min-height: 160rem;
  `};
`;

// eslint 에러를 위해서 의미없는 div export
export const T = styled.div``;
