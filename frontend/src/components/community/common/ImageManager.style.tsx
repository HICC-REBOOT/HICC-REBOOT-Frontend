import { DeviceProvider } from '@assets/mediaQuery';
import styled from 'styled-components';

export const ImageContainer = styled.aside`
  margin-bottom: 4rem;
`;

export const Label = styled.div`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography[DeviceProvider()].body};
`;

export const ImageUploads = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageUploadButton = styled.div<{ hide: boolean }>`
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;

  border-radius: 1rem;
  background: ${(props) => props.theme.colors.grey001};

  ${(props) => props.theme.media.tablet`
    width: 8rem;
    height: 8rem;
  `};

  ${(props) => props.theme.media.desktop`
    width: 10rem;
    height: 10rem;
  `};

  ${(props) => props.theme.media.wide`
    width: 10rem;
    height: 10rem;
  `};
`;
