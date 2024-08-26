import React from 'react';
import COMMON from '@constants/common';
import * as W from './style/CommunityWrite.style';
import ImageManager from '../common/ImageManager';
import TextareaInForm from '../common/TextareaInForm';
import useCommunityWrite from '../hooks/useCommunityWrite';

function CommunityWrite() {
  const { register, disabled, setValue, currentImages, onSubmit } = useCommunityWrite();

  return (
    <W.Container onSubmit={onSubmit}>
      <W.InputTitle
        type="text"
        maxLength={COMMON.COMMUNITY.TITLE_LIMIT}
        placeholder="제목을 입력하세요"
        {...register('title', { required: true, maxLength: COMMON.COMMUNITY.TITLE_LIMIT })}
      />
      <TextareaInForm register={register} />
      <ImageManager currentImages={currentImages} setImage={setValue} />
      <W.UploadButton type="submit" disabled={disabled}>
        업로드 하기
      </W.UploadButton>
    </W.Container>
  );
}

export default CommunityWrite;
