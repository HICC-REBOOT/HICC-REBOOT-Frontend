import React from 'react';
import { useForm } from 'react-hook-form';
import * as W from './CommunityWrite.style';
import { CommunityWriteForm } from '../CommunityType';
import ImageManager from '../common/ImageManager';
import TextareaInForm from '../common/TextareaInForm';

function CommunityWrite() {
  const { handleSubmit, register, setValue, watch, formState } = useForm<CommunityWriteForm>();

  // 현재 등록되어있는 이미지
  const currentImages = watch('image');

  const onSubmit = async (data: CommunityWriteForm) => {
    console.log(data);
  };

  return (
    <W.Container onSubmit={handleSubmit(onSubmit)}>
      <W.InputTitle type="text" placeholder="제목을 입력하세요" {...register('title', { required: true })} />
      <TextareaInForm register={register} />
      <ImageManager currentImages={currentImages} setImage={setValue} />
      <W.UploadButton type="submit" disabled={!formState.isValid}>
        업로드 하기
      </W.UploadButton>
    </W.Container>
  );
}

export default CommunityWrite;
