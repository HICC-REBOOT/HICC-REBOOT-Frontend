import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: var(--black, #0a0a0a);
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-feature-settings:
    'clig' off,
    'liga' off;

  ${(props) => props.theme.typography[DeviceProvider()].title};

  ${(props) => props.theme.media.mobile`
    height: 59.3rem;
  `}

  ${(props) => props.theme.media.tablet`
    height: 56.987rem;
  `}

  ${(props) => props.theme.media.desktop`
    height: 86.4rem;
  `}

  ${(props) => props.theme.media.wide`
    height: 86.4rem;
  `}
`;

export const Title = styled.div`
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;

  ${(props) => props.theme.typography[DeviceProvider()].title};

  ${(props) => props.theme.media.mobile`
      top: 8rem;
      width: 32.rem;
  `}

  ${(props) => props.theme.media.tablet`
      top: 9.587rem;
      width: 51.7rem;
  `}

  ${(props) => props.theme.media.desktop`
      top: 20.1rem;
      width: 32rem;
  `}

  ${(props) => props.theme.media.wide`
      top: 20.1rem;
      width: 32rem;
  `}
`;

export const Content = styled.div`
  position: relative;
  color: rgba(255, 255, 255, 0.7);

  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
      top: 9.6rem;
      width: 17.1rem;
  `}

  ${(props) => props.theme.media.tablet`
      top: 10.887rem;
      width: 46.7rem;
  `}

  ${(props) => props.theme.media.desktop`
      top: 21.6rem;
      width: 46.7rem;
  `}

  ${(props) => props.theme.media.wide`
      top: 21.6rem;
      width: 46.7rem;
  `}
`;

export const TableBox = styled.div`
  background: var(--grey001, #141415);
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
      width: 32.8rem;
      height: 6.4rem;
      flex-shrink: 0;

      border-radius: 1.2rem;
  `}

  ${(props) => props.theme.media.tablet`
      width: 21.6rem;
      height: 16.2rem;
      flex-shrink: 0;

      border-radius: 1.6rem;
  `}

  ${(props) => props.theme.media.desktop`
      width: 32.7rem;
      height: 18.6rem;
      flex-shrink: 0;

      border-radius: 1.6rem;
  `}

  ${(props) => props.theme.media.wide`
      width: 32.7rem;
      height: 18.6rem;
      flex-shrink: 0;

      border-radius: 1.6rem;
  `}
`;

export const TableContainer = styled.div`
  position: relative;
  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
      top: 12.8rem;
      display: flex;
      flex-direction: column;
      gap: 2.1rem;
  `}

  ${(props) => props.theme.media.tablet`
      top: 14.6rem;
      display: flex;
      flex-direction: raw;
      gap: 2.1rem;
  `}

  ${(props) => props.theme.media.desktop`
      top: 28.6rem;
      display: flex;
      flex-direction: raw;
      gap: 2.7rem;
  `}

  ${(props) => props.theme.media.wide`
      top: 28.6rem;
      display: flex;
      flex-direction: raw;
      gap: 2.7rem;
  `}
`;

export const TableContent = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
      position: relative;
      top: 1.3rem;
      display: flex;
      width: 30.4rem;
      align-items: center;
      gap: 6.6rem;
  `}

  ${(props) => props.theme.media.tablet`
      position: relative;
      top: 5rem;
      display: inline-flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: var(--Column, 0.8rem);
  `}

  ${(props) => props.theme.media.desktop`
      position: relative;
      top: 5.1rem;
      display: inline-flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: 1.6rem;
  `}

  ${(props) => props.theme.media.wide`
      position: relative;
      top: 5.1rem;
      display: inline-flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: 1.6rem;
  `}
`;

export const TableTitle = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
      display: flex;
      width: 8rem;
      height: 2rem;
      flex-direction: column;
      justify-content: center;
      flex-shrink: 0;
      color: var(--white, var(--Greyscale-light-white, #FFF));
      font-feature-settings: 'clig' off, 'liga' off;
  `}

  ${(props) => props.theme.media.tablet`
      color: var(--white, var(--Greyscale-light-white, #FFF));
      text-align: center;
      font-feature-settings: 'clig' off, 'liga' off;
  `}

  ${(props) => props.theme.media.desktop`
      color: var(--white, var(--Greyscale-light-white, #FFF));
      text-align: center;
      font-feature-settings: 'clig' off, 'liga' off;

  `}

  ${(props) => props.theme.media.wide`
      color: var(--white, var(--Greyscale-light-white, #FFF));
      text-align: center;
      font-feature-settings: 'clig' off, 'liga' off;
  `}
`;

export const NumberContainer = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
    display: flex;
    width: 15.8rem;
    height: 3.8rem;
    justify-content: flex-end;
    align-items: center;
    gap: var(--Column, 4px);

    flex-shrink: 0;
  `}

  ${(props) => props.theme.media.tablet`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.2rem;
  `}

  ${(props) => props.theme.media.desktop`
      display: flex;
      width: 15.7rem;
      justify-content: center;
      align-items: flex-start;
      gap: 0.4rem;
  `}

  ${(props) => props.theme.media.wide`
      display: flex;
      width: 15.7rem;
      justify-content: center;
      align-items: flex-start;
      gap: 0.4rem;
  `}
`;

export const Number = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].title};
  color: var(--white, var(--Greyscale-light-white, #fff));
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.media.mobile`
  `}

  ${(props) => props.theme.media.tablet`
  `}

  ${(props) => props.theme.media.desktop`
  `}

  ${(props) => props.theme.media.wide`
  `}
`;

export const Unit = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].title};

  ${(props) => props.theme.media.mobile`
      width: 2.3rem;
      height: 3rem;
      color: var(--white, var(--Greyscale-light-white, #FFF));
      font-feature-settings: 'clig' off, 'liga' off;
  `}

  ${(props) => props.theme.media.tablet`
      width: 3rem;
      height: 4rem;
      color: var(--white, var(--Greyscale-light-white, #FFF));
      font-feature-settings: 'clig' off, 'liga' off;
  `}

  ${(props) => props.theme.media.desktop`
      width: 4.5rem;
      height: 6rem;
      color: var(--white, var(--Greyscale-light-white, #FFF));
      font-feature-settings: 'clig' off, 'liga' off;
  `}

  ${(props) => props.theme.media.wide`
      width: 4.5rem;
      height: 6rem;
      color: var(--white, var(--Greyscale-light-white, #FFF));
      font-feature-settings: 'clig' off, 'liga' off;
  `}
`;
