import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArticleDetailType, CommunityWriteForm, ImageInfo } from '../CommunityType';
import * as U from '../write/CommunityWrite.style';
import TextareaInForm from '../common/TextareaInForm';
import ImageManager from '../common/ImageManager';

function CommunityUpdate() {
  const location = useLocation();
  const data = location.state as ArticleDetailType;

  const navigate = useNavigate();

  // 비정상적인 접근일 경우 뒤로가기
  useEffect(() => {
    if (data === null) {
      alert('잘못된 접근입니다.');
      navigate(-1);
    }
  }, [data, navigate]);

  const imageSrc: ImageInfo[] = data.urls.map((imageMeta) => {
    return {
      src: imageMeta[0],
    };
  });

  const defalutValues: CommunityWriteForm = {
    title: data.subject,
    image: imageSrc,
    content: data.content,
  };

  const { handleSubmit, register, setValue, watch, formState } = useForm<CommunityWriteForm>({
    defaultValues: defalutValues,
  });

  // 현재 등록되어있는 이미지
  const currentImages = watch('image');

  const onSubmit = async (formdata: CommunityWriteForm) => {
    console.log(formdata);
  };

  return (
    <U.Container onSubmit={handleSubmit(onSubmit)}>
      <U.InputTitle type="text" placeholder="제목을 입력하세요" {...register('title', { required: true })} />
      <TextareaInForm register={register} />
      <ImageManager currentImages={currentImages} setImage={setValue} />
      <U.UploadButton type="submit" disabled={!formState.isValid}>
        업로드 하기
      </U.UploadButton>
    </U.Container>
  );
}

export default CommunityUpdate;
