import React from 'react';
import { useForm } from 'react-hook-form';
import processNewImage from '@utils/image/processNewImage';
import usePostArticle from '@query/post/usePostArticle';
import { useOutletContext } from 'react-router-dom';
import * as W from './CommunityWrite.style';
import { Board, CommunityWriteForm } from '../CommunityType';
import ImageManager from '../common/ImageManager';
import TextareaInForm from '../common/TextareaInForm';
import CurrentBoardContext from '../CurrentBoardContext';

function CommunityWrite() {
  const { handleSubmit, register, setValue, watch, formState } = useForm<CommunityWriteForm>();
  const { currentBoard } = useOutletContext<CurrentBoardContext>();

  const { writeArticle, isPending } = usePostArticle();

  // 현재 등록되어있는 이미지
  const currentImages = watch('image');

  const onSubmit = async (data: CommunityWriteForm) => {
    const images = await processNewImage(data);
    writeArticle({
      images,
      board: currentBoard.value as Board,
      subject: data.title,
      content: data.content,
    });
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
