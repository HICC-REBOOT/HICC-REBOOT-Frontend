import { DeviceProvider } from '@assets/mediaQuery';
import styled from 'styled-components';
import small404 from '@assets/image/404small.png';
import big404 from '@assets/image/404big.png';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  background-color: ${(props) => props.theme.colors.black};
`;

export const Oops = styled.header`
  margin-top: 4.8rem;

  ${(props) => props.theme.media.tablet`
    margin-top: 5.1rem;
  `};

  ${(props) => props.theme.media.desktop`
    margin-top: 24.3rem;
  `};

  ${(props) => props.theme.media.wide`
    margin-top: 24.3rem;
  `};

  color: ${(props) => props.theme.colors.white};
  text-align: center;

  ${(props) => props.theme.typography[DeviceProvider()].title};
`;

export const ErrorMessage = styled.div`
  margin-top: 0.8rem;

  ${(props) => props.theme.media.tablet`
    margin-top: 2rem;
  `};

  ${(props) => props.theme.media.desktop`
    margin-top: 2.4rem;
  `};

  ${(props) => props.theme.media.wide`
    margin-top: 2.4rem;
  `};

  color: ${(props) => props.theme.colors.grey004};
  text-align: center;

  background-color: transparent;
  ${(props) => props.theme.typography[DeviceProvider()].body};
  white-space: pre-line;
`;

export const Image = styled.div`
  width: 27.6rem;
  height: 27.6rem;
  margin: 1.8rem auto 0 auto;

  background-image: url(${small404});

  ${(props) => props.theme.media.tablet`
    background-image: url(${big404});
    width: 47rem;
    height: 47rem;
  `};

  ${(props) => props.theme.media.desktop`
    background-image: url(${big404});
    width: 47rem;
    height: 47rem;
  `};

  ${(props) => props.theme.media.wide`
    background-image: url(${big404});
    width: 47rem;
    height: 47rem;
  `};

  background-repeat: no-repeat;
  background-size: contain;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

// 스타일 조정
export const GoHome = styled(Link)`
  margin-right: 1rem;
  padding: 1rem 2rem;
  border-radius: 1.2rem;
  border: 1px solid #53ffcb;
  background: linear-gradient(95deg, rgba(91, 78, 245, 0.3) 0%, rgba(91, 78, 245, 0) 100%),
    linear-gradient(275deg, rgba(83, 255, 203, 0.3) 0%, rgba(83, 255, 203, 0) 100%);

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};
`;

export const RetryButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 1.2rem;
  border: 1px solid #53ffcb;
  background: linear-gradient(95deg, rgba(91, 78, 245, 0.3) 0%, rgba(91, 78, 245, 0) 100%),
    linear-gradient(275deg, rgba(83, 255, 203, 0.3) 0%, rgba(83, 255, 203, 0) 100%);

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};
`;
