/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useReducer } from 'react';
import Delete from '@assets/image/icon/trash.svg';
import { Desktop, NotDesktop } from '@assets/mediaQuery';
import * as I from './style/EachImage.style';

interface EachImageProps {
  image: string;
  deleteImage: () => void;
}

function EachImage({ image, deleteImage }: EachImageProps) {
  const [backdropShow, setBackdropShow] = useReducer((prev: boolean) => !prev, false);

  return (
    <>
      <NotDesktop>
        <I.ImageContainer>
          <I.ImageView src={image} alt="image" />
          <I.NotDesktopBackdrop>
            <img src={Delete} alt="" style={{ cursor: 'pointer' }} onClick={deleteImage} />
          </I.NotDesktopBackdrop>
        </I.ImageContainer>
      </NotDesktop>
      <Desktop>
        <I.ImageContainer onMouseEnter={setBackdropShow} onMouseLeave={setBackdropShow}>
          <I.ImageView src={image} alt="image" />
          <I.Backdrop $show={backdropShow}>
            <img src={Delete} alt="" style={{ cursor: 'pointer' }} onClick={deleteImage} />
          </I.Backdrop>
        </I.ImageContainer>
      </Desktop>
    </>
  );
}

export default EachImage;
