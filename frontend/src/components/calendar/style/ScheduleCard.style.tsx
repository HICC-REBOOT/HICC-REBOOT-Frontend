import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

export const Container = styled.div`
  border-radius: 1.6rem;
  background-color: #141415;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  width: 100%;
  position: relative;
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
  padding-right: 3.6rem;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-right: 0.8rem;
  margin-right: 0.8rem;
  border-right: 0.2rem solid ${(props) => props.theme.colors.white};
`;

export const Time1 = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].body};
  color: ${(props) => props.theme.colors.white};
`;

export const Time2 = styled.span`
  ${(props) => props.theme.typography.common.caption2};
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
`;

export const InfoContainer = styled.div``;

export const Title = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].body}
  color: ${(props) => props.theme.colors.white};
  white-space: nowrap;

  ${(props) => props.theme.media.desktop`
    padding-right: 3.6rem;
  `};

  ${(props) => props.theme.media.wide`
    padding-right: 3.6rem;
  `};
`;

export const Detail = styled.div`
  ${(props) => props.theme.typography.common.caption2};
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
  text-align: justify;

  ${(props) => props.theme.media.tablet`
    max-width: 19rem;
  `};

  ${(props) => props.theme.media.desktop`
    max-width: 50rem;
  `};

  ${(props) => props.theme.media.wide`
    max-width: 50rem;
  `};
`;

export const EditBtn = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.red};
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  margin-left: 1.2rem;
  position: absolute;
  right: 1.6rem;
  top: 2rem;
`;
