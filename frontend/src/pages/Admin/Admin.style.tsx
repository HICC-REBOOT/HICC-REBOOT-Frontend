import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.colors.black};

  ${(props) => props.theme.media.mobile`

  `};

  ${(props) => props.theme.media.tablet`

  `};

  ${(props) => props.theme.media.desktop`
    margin-top: 18.8rem;
  `};

  ${(props) => props.theme.media.wide`
    margin-top: 18.8rem;
  `};
`;

export const TabContainer = styled.div`
  width: 36rem;
  height: 5.5rem;
  margin: 0 auto;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  padding: 3.6rem 1.6rem;

  gap: 1.8rem;
  background-color: ${(props) => props.theme.colors.black};
`;
