import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import usePatchArticle from '@query/patch/usePatchArticle';
import TuiEditor from '@components/community/markdown/Editor';
import { ArticleDetailType, CommunityWriteForm, NewImageUrl } from '../CommunityType';
import * as U from '../write/style/CommunityWrite.style';
import CurrentBoardContext from '../CurrentBoardContext';

function CommunityUpdate() {
  const location = useLocation();
  const data = location.state as ArticleDetailType;

  const { currentBoard, boardList } = useOutletContext<CurrentBoardContext>();

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

  const { handleSubmit, register, setValue, getValues, formState } = useForm<CommunityWriteForm>({
    defaultValues: setDefaultValues(),
  });

  const typingCount = getValues('content').length;

  const setContent = (content: string) => {
    setValue('content', content);
  };

  const [newImages, setNewImages] = useState<NewImageUrl[]>([]);

  const handleNewImages = (newImage: NewImageUrl) => {
    setNewImages((prev) => [...prev, newImage]);
  };

  const getBoardTypeId = (boardType: string) => {
    return boardList.filter((board) => board.boardType === boardType)[0].boardTypeId;
  };

  const onSubmit = async (formdata: CommunityWriteForm) => {
    if (formdata.content.length >= 50000) {
      alert('최대 글자 수를 초과했습니다.');
      return;
    }

    const boardTypeId =
      parseInt(currentBoard.value, 10) === -1 ? getBoardTypeId(data.board) : parseInt(currentBoard.value, 10);

    updateArticle({
      data: {
        images: newImages,
        boardTypeId,
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
      <U.TypingCount>{`${typingCount.toLocaleString('ko-kr')} / 50,000`}</U.TypingCount>
      <U.UploadButton type="submit" disabled={!formState.isValid || isPending}>
        업로드 하기
      </U.UploadButton>
    </U.Container>
  );
}

export default CommunityUpdate;
