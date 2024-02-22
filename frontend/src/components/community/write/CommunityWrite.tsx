import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import processNewImage from '@utils/image/processNewImage';
import usePostArticle from '@query/post/usePostArticle';
import { useOutletContext } from 'react-router-dom';
import COMMON from '@constants/common';
import * as W from './style/CommunityWrite.style';
import { Board, CommunityWriteForm } from '../CommunityType';
import ImageManager from '../common/ImageManager';
import TextareaInForm from '../common/TextareaInForm';
import CurrentBoardContext from '../CurrentBoardContext';

function CommunityWrite() {
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const { handleSubmit, register, setValue, watch, formState } = useForm<CommunityWriteForm>({
    defaultValues: {
      title: '',
      content: '',
      image: [],
    },
  });
  const { currentBoard } = useOutletContext<CurrentBoardContext>();

  const { writeArticle, isPending } = usePostArticle();

  // 현재 등록되어있는 이미지
  const currentImages = watch('image');

  const onSubmit = async (data: CommunityWriteForm) => {
    setImageLoading(true);
    const images = await processNewImage(data);
    setImageLoading(false);
    writeArticle({
      images,
      board: currentBoard.value as Board,
      subject: data.title,
      content: data.content,
    });
  };

  return (
    <W.Container onSubmit={handleSubmit(onSubmit)}>
      <W.InputTitle
        type="text"
        maxLength={COMMON.COMMUNITY.TITLE_LIMIT}
        placeholder="제목을 입력하세요"
        {...register('title', { required: true, maxLength: COMMON.COMMUNITY.TITLE_LIMIT })}
      />
      <TextareaInForm register={register} />
      <ImageManager currentImages={currentImages} setImage={setValue} />
      <W.UploadButton type="submit" disabled={!formState.isValid || isPending || imageLoading}>
        업로드 하기
      </W.UploadButton>
    </W.Container>
  );
}

export default CommunityWrite;
