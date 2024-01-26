import STYLE from '@constants/style';
import hexToRGBA from '@utils/hexToRgba';
import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  margin-right: 1rem;

  border-radius: 1rem;

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

export const ImageView = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-shrink: 0;

  border-radius: 1rem;
  object-fit: cover;
`;

export const Backdrop = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-shrink: 0;

  border-radius: 1rem;

  background-color: ${(props) => hexToRGBA(props.theme.colors.black, 0.8)};

  z-index: ${STYLE.Z_INDEX.COMMON};
`;

export const NotDesktopBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-shrink: 0;

  border-radius: 1rem;

  background-color: ${(props) => hexToRGBA(props.theme.colors.black, 0.8)};

  z-index: ${STYLE.Z_INDEX.COMMON};
`;
