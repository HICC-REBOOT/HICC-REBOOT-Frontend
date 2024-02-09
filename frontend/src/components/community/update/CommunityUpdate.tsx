import React, { useEffect } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import usePatchArticle from '@query/patch/usePatchArticle';
import processNewImage from '@utils/image/processNewImage';
import { ArticleDetailType, Board, CommunityWriteForm, ImageInfo, ImageUrlSend } from '../CommunityType';
import * as U from '../write/CommunityWrite.style';
import TextareaInForm from '../common/TextareaInForm';
import ImageManager from '../common/ImageManager';
import CurrentBoardContext from '../CurrentBoardContext';

function CommunityUpdate() {
  const location = useLocation();
  const data = location.state as ArticleDetailType;

  const { currentBoard } = useOutletContext<CurrentBoardContext>();

  const navigate = useNavigate();

  // 비정상적인 접근일 경우 뒤로가기
  useEffect(() => {
    if (data === null) {
      alert('잘못된 접근입니다.');
      navigate(-1);
    }
  }, [data, navigate]);

  const { updateArticle, isPending } = usePatchArticle();

  const setDefaultValues = (): CommunityWriteForm => {
    if (data === null) {
      return { title: '', image: [], content: '' };
    }

    const imageSrc: ImageInfo[] = data.images?.map((imageMeta) => {
      return {
        src: imageMeta.url,
      };
    });

    return {
      title: data.subject,
      image: imageSrc,
      content: data.content,
    };
  };

  const { handleSubmit, register, setValue, watch, formState } = useForm<CommunityWriteForm>({
    defaultValues: setDefaultValues(),
  });

  // 현재 등록되어있는 이미지
  const currentImages = watch('image');

  const onSubmit = async (formdata: CommunityWriteForm) => {
    const newImages = await processNewImage(formdata);

    const existingImagesSrc = data.images.map((image) => image.url);
    const currentImagesSrc = currentImages.map((image) => image.src);

    // 기존과 현재의 교집합만 추림, 삭제된 정보는 보내지 않기 위해
    const intersection = existingImagesSrc.filter((src) => currentImagesSrc.includes(src));

    const existingImages = data.images.filter((image) => intersection.includes(image.url));

    const existingImagesInfo: ImageUrlSend[] = existingImages.map((image) => {
      return {
        fileName: image.fileName,
        fileNameExtension: image.fileNameExtension,
        key: image.key,
      };
    });

    updateArticle({
      data: {
        images: [...newImages, ...existingImagesInfo],
        board: currentBoard.value as Board,
        subject: formdata.title,
        content: formdata.content,
      },
      articleId: data.articleId,
    });
  };

  return (
    <U.Container onSubmit={handleSubmit(onSubmit)}>
      <U.InputTitle type="text" placeholder="제목을 입력하세요" {...register('title', { required: true })} />
      <TextareaInForm register={register} />
      <ImageManager currentImages={currentImages} setImage={setValue} />
      <U.UploadButton type="submit" disabled={!formState.isValid || isPending}>
        업로드 하기
      </U.UploadButton>
    </U.Container>
  );
}

export default CommunityUpdate;
