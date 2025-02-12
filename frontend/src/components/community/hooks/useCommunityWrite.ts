import { useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import usePostArticle from '@query/post/usePostArticle';
import { useState } from 'react';
import { Board, CommunityWriteForm, NewImageUrl } from '../CommunityType';
import CurrentBoardContext from '../CurrentBoardContext';

const useCommunityWrite = () => {
  const { handleSubmit, register, setValue, formState } = useForm<CommunityWriteForm>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const { currentBoard } = useOutletContext<CurrentBoardContext>();
  const { writeArticle, isPending } = usePostArticle();
  const [newImages, setNewImages] = useState<NewImageUrl[]>([]);

  const handleNewImages = (newImage: NewImageUrl) => {
    setNewImages((prev) => [...prev, newImage]);
  };

  const onSubmit = async (data: CommunityWriteForm) => {
    writeArticle({
      images: newImages,
      board: currentBoard.value as Board,
      subject: data.title,
      content: data.content,
    });
  };

  const disabled = !formState.isValid || isPending;

  return {
    register,
    setValue,
    handleNewImages,
    formState,
    onSubmit: handleSubmit(onSubmit),
    disabled,
  };
};

export default useCommunityWrite;
