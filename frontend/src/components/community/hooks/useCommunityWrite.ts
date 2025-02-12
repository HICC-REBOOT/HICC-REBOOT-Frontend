import { useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import usePostArticle from '@query/post/usePostArticle';
import { useState } from 'react';
import { CommunityWriteForm, NewImageUrl } from '../CommunityType';
import CurrentBoardContext from '../CurrentBoardContext';

const useCommunityWrite = () => {
  const { handleSubmit, register, setValue, watch, formState } = useForm<CommunityWriteForm>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const { currentBoard, boardList } = useOutletContext<CurrentBoardContext>();
  const { writeArticle, isPending } = usePostArticle();
  const [newImages, setNewImages] = useState<NewImageUrl[]>([]);

  const handleNewImages = (newImage: NewImageUrl) => {
    setNewImages((prev) => [...prev, newImage]);
  };

  const getBoardTypeId = (boardType: string) => {
    return boardList.filter((board) => board.boardType === boardType)[0].boardTypeId;
  };

  const onSubmit = async (data: CommunityWriteForm) => {
    if (data.content.length >= 50000) {
      alert('최대 글자 수를 초과했습니다.');
      return;
    }

    const boardTypeId =
      parseInt(currentBoard.value, 10) === -1 ? getBoardTypeId('자유게시판') : parseInt(currentBoard.value, 10);

    writeArticle({
      images: newImages,
      boardTypeId,
      subject: data.title,
      content: data.content,
    });
  };

  const typingCount = watch('content').length;
  const disabled = !formState.isValid || isPending;

  return {
    register,
    setValue,
    handleNewImages,
    formState,
    typingCount,
    onSubmit: handleSubmit(onSubmit),
    disabled,
  };
};

export default useCommunityWrite;
