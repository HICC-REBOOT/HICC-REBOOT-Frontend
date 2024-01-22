import React, { FormEventHandler, useRef } from 'react';
import { ReactComponent as ImageUpload } from '@assets/image/icon/ImageUpload.svg';
import { useForm } from 'react-hook-form';
import COMMON from '@constants/common';
import getImageMetas from '@utils/image/getImageMeta';
import * as W from './CommunityWrite.style';
import EachImage from './EachImage';

// 새로 등록은 file, 이미 있는 이미지면 src (수정을 위해)
interface Image {
  file?: File;
  src: string;
}

interface WriteForm {
  title: string;
  content: string;
  image: Image[];
}

function CommunityWrite() {
  const { handleSubmit, register, setValue, watch, formState } = useForm<WriteForm>();
  const fileRef = useRef<HTMLInputElement | null>(null);

  // 현재 등록되어있는 이미지
  const currentImages = watch('image');

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
      setValue('image', await getImageMetas(files));
      return;
    }

    setValue('image', [...Array.from(currentImages), ...(await getImageMetas(files))]);
  };

  const textareaAutosize: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const element = e.target as HTMLTextAreaElement;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight / 10}rem`;
  };

  const onSubmit = async (data: WriteForm) => {
    console.log(data);
  };

  return (
    <W.Container onSubmit={handleSubmit(onSubmit)}>
      <W.InputTitle type="text" placeholder="제목을 입력하세요" {...register('title', { required: true })} />
      <W.Textarea
        placeholder="내용을 입력하세요"
        {...register('content', {
          required: true,
          onChange: textareaAutosize,
        })}
      />
      <W.ImageContainer>
        <input
          type="file"
          style={{ display: 'none' }}
          ref={fileRef}
          onChange={handleFileSelect}
          accept=".jpg,.png,.jpeg"
          multiple
        />
        <W.Label>사진 업로드</W.Label>
        <W.ImageUploads>
          {currentImages?.map((image, index) => <EachImage key={index} image={image.src} />)}
          <W.ImageUploadButton hide={currentImages?.length >= COMMON.IMAGE.MAX_LENGTH} onClick={handleImgBtn}>
            <ImageUpload style={{ cursor: 'pointer' }} />
          </W.ImageUploadButton>
        </W.ImageUploads>
      </W.ImageContainer>
      <W.UploadButton type="submit" disabled={!formState.isValid}>
        업로드 하기
      </W.UploadButton>
    </W.Container>
  );
}

export default CommunityWrite;
