import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';
import theme from '@styles/theme';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  background: ${(props) => props.theme.colors.black};
`;

export const GroupContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  ${(props) => props.theme.media.mobile`
    margin-top: 3.6rem;
    width: 32.8rem;
    height: 34.4rem;
  `}

  ${(props) => props.theme.media.tablet`
    margin-top: 10rem;
    width: 34.8rem;
    height: 34.4rem;
  `}

  ${(props) => props.theme.media.desktop`
    margin-top: 20.8rem;
    width: 32.8rem;
    height: 34.4rem;
  `}

  ${(props) => props.theme.media.wide`
    margin-top: 20.8rem;
    width: 32.8rem;
    height: 34.4rem;
  `}
`;

export const Title = styled.div`
  position: absolute;
  height: 3.2rem;
  display: inline-flex;
  align-items: center;
  gap: var(--Column, 0.4rem);

  left: 0rem;

  flex-shrink: 0;
`;

export const Name = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography[DeviceProvider()].subtitle};
  ${(props) => props.theme.media.mobile`
    // width: 4.9rem;
    height: 2.1rem;
  `}

  ${(props) => props.theme.media.tablet`
    // width: 6.8rem;
    height: 3rem;
  `}

  ${(props) => props.theme.media.desktop`
    // width: 7.9rem;
    height: 3.5rem;
  `}

  ${(props) => props.theme.media.wide`
    // width: 7.9rem;
    height: 3.5rem;
  `}
`;

export const Label = styled.div`
  width: 6.1rem;
  height: 3.1rem;

  display: flex;
  padding: 0.5rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: ${(props) => props.theme.colors.white};

  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.1);
`;

export const Button = styled.button`
  position: relative;
  top: 29.8rem;
  width: 12.6rem;
  height: 4.6rem;
  display: flex;
  padding: 1rem 2rem;
  color: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  border-radius: 12px;
  background: ${(props) => {
    if (props.disabled === true) return props.theme.colors.grey001;
    return props.theme.colors.point1;
  }};
  ${(props) => props.theme.typography.common.button1};
`;

export const BoxTitle = styled.div`
  position: absolute;
  left: 1.2rem;
  height: 1.6rem;
  top: -2rem;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.point1};
  ${(props) => props.theme.typography.common.caption2};
`;

export const BoxAlert = styled.div`
  position: absolute;
  left: 1.2rem;
  top: 6.5rem;
  width: 100%;
  height: 1.6rem;
  color: ${(props) => props.theme.colors.red};
  white-space: nowrap;
  ${(props) => props.theme.typography.common.caption2};
`;

export const BoxArea = styled.div`
  position: absolute;
  flex-shrink: 0;
  display: inline;
  ${(props) => props.theme.media.mobile`
    width: 15.6rem;
    height: 5.4rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 16.6rem;
    height: 5.4rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 15.6rem;
    height: 5.4rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 15.6rem;
    height: 5.4rem;
  `}
`;
export const Input = styled.input`
  position: absolute;
  flex-shrink: 0;
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.grey001};
  padding-left: 1.2rem;
  padding-right: 3.5rem;
  ${(props) => props.theme.media.mobile`
    width: 15.6rem;
    height: 5.4rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 16.6rem;
    height: 5.4rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 15.6rem;
    height: 5.4rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 15.6rem;
    height: 5.4rem;
  `}
`;

export const BigBoxArea = styled.div`
  position: relative;
  top: 19.1rem;
  margin-top: 2rem;
  flex-shrink: 0;
  display: inline;
  ${(props) => props.theme.media.mobile`
    width: 32.8rem;
    height: 9.4rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 34.8rem;
    height: 9.8rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 32.8rem;
    height: 9.8rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 32.8rem;
    height: 9.8rem;
  `}
`;

export const BigBox = styled.input`
  position: relative;
  flex-shrink: 0;
  display: inline;
  border: none;
  border-radius: 1.6rem;
  padding-left: 1.2rem;
  padding-right: 3.5rem;
  color: ${theme.colors.white};
  background: ${theme.colors.grey001};
  ${(props) => props.theme.media.mobile`
    width: 32.8rem;
    height: 5.4rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 34.8rem;
    height: 5.4rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 32.8rem;
    height: 5.4rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 32.8rem;
    height: 5.4rem;
  `}
`;

export const ExitArea = styled.div`
  position: relative;
  margin-top: 17.7rem;
  width: 100%;
  height: 5.4rem;
  flex-shrink: 0;
`;

export const ExitContent = styled.button`
  position: absolute;
  right: 3.1rem;
  height: 2.1rem;
  color: ${(props) => props.theme.colors.red};
  ${(props) => props.theme.typography.common.caption1};
`;

export const BottomDiv = styled.div`
  position: relative;
  height: 11.1rem;
  background: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.media.mobile`
    height: 11.1rem;
  `}

  ${(props) => props.theme.media.tablet`
    height: 38.1rem;
  `}

  ${(props) => props.theme.media.desktop`
    height: 58.1rem;
  `}

  ${(props) => props.theme.media.wide`
    height: 58.1rem;
  `}
`;

export const CheckDiv = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  z-index: 1;
`;
