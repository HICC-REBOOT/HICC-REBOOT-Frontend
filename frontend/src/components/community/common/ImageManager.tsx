import React, { useRef } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import COMMON from '@constants/common';
import ImageUpload from '@assets/image/icon/ImageUpload.svg';
import getImageMetas from '@utils/image/getImageMeta';
import * as I from './style/ImageManager.style';

import EachImage from '../write/EachImage';
import { CommunityWriteForm, ImageInfo } from '../CommunityType';

interface ImageManagerProps {
  currentImages: ImageInfo[];
  setImage: UseFormSetValue<CommunityWriteForm>;
}

function ImageManager({ currentImages, setImage }: ImageManagerProps) {
  const fileRef = useRef<HTMLInputElement | null>(null);

  // 이미지 버튼을 눌렀을 때 파일 선택 창을 띄우는 함수
  const handleImgBtn = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  // 이미지 등록 개수 초과검증 (추가 파일과 현재 등록돼있는 이미지가 10개 초과면 에러)
  const checkOverImageLength = (fileLength: number) => {
    const currentImageLength = currentImages === undefined ? 0 : currentImages.length;
    const totalImageLength = fileLength + currentImageLength;

    return totalImageLength > COMMON.IMAGE.MAX_LENGTH;
  };

  // 파일을 입력받아 state에 반영
  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files === null) return;

    if (checkOverImageLength(files.length)) {
      alert('이미지 등록 개수를 초과했습니다.');
      return;
    }

    if (currentImages === undefined) {
      setImage('image', await getImageMetas(files));
      return;
    }

    setImage('image', [...Array.from(currentImages), ...(await getImageMetas(files))]);
  };

  const deleteImage = (imageIndex: number) => {
    const prevState = [...currentImages];
    const newState = [...prevState.slice(0, imageIndex), ...prevState.slice(imageIndex + 1, prevState.length)];
    setImage('image', newState);
  };

  return (
    <>
      <I.ImageContainer>
        <input
          type="file"
          style={{ display: 'none' }}
          ref={fileRef}
          onChange={handleFileSelect}
          accept=".jpg,.png,.jpeg"
          multiple
        />
        <I.Label>사진 업로드</I.Label>
        <I.ImageUploads>
          {currentImages?.map((image, index) => (
            <EachImage key={index} image={image.src} deleteImage={() => deleteImage(index)} />
          ))}
          <I.ImageUploadButton $hide={currentImages?.length >= COMMON.IMAGE.MAX_LENGTH} onClick={handleImgBtn}>
            <img src={ImageUpload} alt="" style={{ cursor: 'pointer' }} />
          </I.ImageUploadButton>
        </I.ImageUploads>
      </I.ImageContainer>
    </>
  );
}

export default ImageManager;
