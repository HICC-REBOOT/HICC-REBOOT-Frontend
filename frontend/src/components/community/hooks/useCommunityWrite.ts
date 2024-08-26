import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import usePostArticle from '@query/post/usePostArticle';
import processNewImage from '@utils/image/processNewImage';
import { Board, CommunityWriteForm } from '../CommunityType';
import CurrentBoardContext from '../CurrentBoardContext';

const useCommunityWrite = () => {
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

  const disabled = !formState.isValid || isPending || imageLoading;

  return {
    register,
    setValue,
    formState,
    currentImages,
    onSubmit: handleSubmit(onSubmit),
    disabled,
  };
};

export default useCommunityWrite;
