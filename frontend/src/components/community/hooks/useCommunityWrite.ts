import { useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import usePostArticle from '@query/post/usePostArticle';
import { Board, CommunityWriteForm } from '../CommunityType';
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

  const onSubmit = async (data: CommunityWriteForm) => {
    writeArticle({
      board: currentBoard.value as Board,
      subject: data.title,
      content: data.content,
    });
  };

  const disabled = !formState.isValid || isPending;

  return {
    register,
    setValue,
    formState,
    onSubmit: handleSubmit(onSubmit),
    disabled,
  };
};

export default useCommunityWrite;
