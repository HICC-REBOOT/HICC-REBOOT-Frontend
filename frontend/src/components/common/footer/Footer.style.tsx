import styled from 'styled-components';

export const Container = styled.div<{ hide: boolean }>`
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  justify-content: space-between;
  width: 100%;
  height: 31.8rem;

  ${(props) => props.theme.media.mobile`
    height: 24.8rem;
  `};

  ${(props) => props.theme.media.tablet`
    max-width: 76.8rem;
    margin: 0 auto;
  `};

  ${(props) => props.theme.media.desktop`
    max-width: 103.4rem;
    margin: 0 auto;
  `};

  ${(props) => props.theme.media.wide`
    max-width: 103.4rem;
    margin: 0 auto;
  `};

  padding: 0 2.4rem;
  padding-top: 3.5rem;

  background-color: ${(props) => props.theme.colors.black};
`;

export const LeftSide = styled.section``;

export const RightSide = styled.section``;

export const InstagramMent = styled.div`
  display: none;

  ${(props) => props.theme.media.desktop`
    display: block;
    margin-bottom: 2.7rem;
  `}

  ${(props) => props.theme.media.wide`
    display: block;
    margin-bottom: 2.7rem;
  `}

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};
`;

// 색 정의되지 않음..
export const InstagramButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.6rem;
  height: 4.6rem;
  flex-shrink: 0;

  border-radius: 1.2rem;
  background: rgba(119, 119, 119, 0.47);
  cursor: pointer;
`;

export const HICC = styled.p`
  margin-bottom: 1.6rem;

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};
  text-transform: uppercase;
`;

export const Leader = styled.p`
  margin-bottom: 0.9rem;

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.caption1};
`;

export const Location = styled.p`
  margin-bottom: 2.9rem;

  ${(props) => props.theme.media.mobile`
    margin-bottom: 0.3rem;
  `};

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.caption1};
  white-space: pre-line;
`;

export const Copyright = styled.p`
  color: ${(props) => props.theme.colors.white};
  opacity: 0.5;
  ${(props) => props.theme.typography.common.caption1};
`;
