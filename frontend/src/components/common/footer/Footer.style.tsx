import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 31.8rem;

  ${(props) => props.theme.media.mobile`
    height: 24.8rem;
  `}

  padding: 0 2.4rem;
  padding-top: 3.5rem;

  background-color: ${(props) => props.theme.colors.black};
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
  margin-bottom: 0.3rem;

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.caption1};
  white-space: pre-line;
`;

export const Copyright = styled.p`
  color: ${(props) => props.theme.colors.white};
  opacity: 0.5;
  ${(props) => props.theme.typography.common.caption1};
`;
