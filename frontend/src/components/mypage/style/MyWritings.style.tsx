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

export const TabContainer = styled.div`
  width: 36rem;
  height: 5.5rem;
  margin: 0 auto;
`;

export const GroupContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  ${(props) => props.theme.media.mobile`
    margin-top: 1.2rem;
    width: 32.8rem;
  `}

  ${(props) => props.theme.media.tablet`
    margin-top: 2.1rem;
    width: 53.4rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 103.4rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 103.4rem;
  `}
`;

export const TitleArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  text-align: center;
  ${(props) => props.theme.media.mobile`
    width: 32.8rem;
    height: 5.5rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 53.4rem;
    height: 7.5rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 103.4rem;
    height: 7.1rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 103.4rem;
    height: 7.1rem;
  `}
`;

export const TitleTextArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  margin: auto;
  &:hover {
    cursor: pointer;
  }
  ${(props) => props.theme.media.mobile`
    width: 16.4rem;
    height: 5.5rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 26.7rem;
    height: 7.5rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 51.7rem;
    height: 7.1rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 51.7rem;
    height: 7.1rem;
  `}
  ${(props) => props.theme.typography.common.button1};
`;

export const TitleBar = styled.div<{ selected: boolean }>`
  position: absolute;
  width: 100%;
  bottom: 0;
  flex-shrink: 0;
  background: ${(props) => {
    if (props.selected) return props.theme.colors.point1;
    return props.theme.colors.grey001;
  }};
  ${(props) => props.theme.media.mobile`
    height: 0.1rem;
  `}

  ${(props) => props.theme.media.tablet`
    height: 0.1364rem;
  `}

  ${(props) => props.theme.media.desktop`
    height: 0.1291rem;
  `}

  ${(props) => props.theme.media.wide`
    height: 0.1291rem;
  `}
`;

export const ContentsContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  ${(props) => props.theme.media.mobile`
    width: 32.8rem;
    height: 65.3rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 53.4rem;
    height: 81.4rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 6.4rem;
    width: 103.4rem;
    height: 163.6rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 6.4rem;
    width: 103.4rem;
    height: 163.6rem;
  `}
`;

export const ContentsArea = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  gap: 1.2rem;
  white-space: nowrap;
  /* overflow: hidden; */
  ${(props) => props.theme.media.mobile`
    width: 32.8rem;
    height: 16.2rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 53.4rem;
    height: 16.2em;
  `}

  ${(props) => props.theme.media.desktop`
    width: 103.4rem;
    height: 16.2rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 103.4rem;
    height: 16.2rem;
  `}
`;

export const ContentsTitle = styled.div`
  display: block;
  flex-shrink: 0;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
    width: 28.8rem;
    height: 2.4rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 49.4rem;
    height: 2.4em;
  `}

  ${(props) => props.theme.media.desktop`
    width: 99.4rem;
    height: 2.4rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 99.4rem;
    height: 2.4rem;
  `}
`;

export const Contents = styled.div`
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: ${(props) => props.theme.colors.grey003};
  ${(props) => props.theme.typography.common.caption1};

  ${(props) => props.theme.media.mobile`
    width: 28.8rem;
    height: 4.1rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 49.4rem;
    height: 4.1rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 99.4rem;
    height: 4.1rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 99.4rem;
    height: 4.1rem;
  `}
`;

export const ModifyButton = styled.button`
  position: absolute;
  bottom: 0rem;
  right: 5.3rem;
  width: 4.9rem;
  height: 3.7rem;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  padding: 0.8rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: var(--Column, 0.4rem);

  border-radius: 0.8rem;
  background: var(--grey-002, rgba(130, 130, 136, 0.3));
`;

export const DeleteButton = styled.button`
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  width: 4.9rem;
  height: 3.7rem;
  color: ${(props) => props.theme.colors.red};
  display: flex;
  padding: 0.8rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: var(--Column, 0.4rem);

  border-radius: 0.8rem;
  background: rgba(255, 93, 93, 0.1);
`;

export const Divider = styled.div`
  position: relative;
  bottom: -4.3rem;
  width: 105%;
  height: 0.1rem;
  /* align-self: stretch; */
  color: ${theme.colors.grey001};
  background-color: ${theme.colors.grey001};
`;
