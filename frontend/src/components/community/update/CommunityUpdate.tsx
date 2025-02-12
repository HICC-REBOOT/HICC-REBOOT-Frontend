import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import usePatchArticle from '@query/patch/usePatchArticle';
import TuiEditor from '@components/markdownEditor/Editor';
import { ArticleDetailType, Board, CommunityWriteForm, NewImageUrl } from '../CommunityType';
import * as U from '../write/style/CommunityWrite.style';
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
      return { title: '', content: '' };
    }

    return {
      title: data.subject,
      content: data.content,
    };
  };

  const { handleSubmit, register, setValue, formState } = useForm<CommunityWriteForm>({
    defaultValues: setDefaultValues(),
  });

  const setContent = (content: string) => {
    setValue('content', content);
  };

  const [newImages, setNewImages] = useState<NewImageUrl[]>([]);

  const handleNewImages = (newImage: NewImageUrl) => {
    setNewImages((prev) => [...prev, newImage]);
  };

  const onSubmit = async (formdata: CommunityWriteForm) => {
    updateArticle({
      data: {
        images: newImages,
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
      <TuiEditor handleNewImage={handleNewImages} setContent={setContent} initialValue={data.content} />
      <U.UploadButton type="submit" disabled={!formState.isValid || isPending}>
        업로드 하기
      </U.UploadButton>
    </U.Container>
  );
}

export default CommunityUpdate;
