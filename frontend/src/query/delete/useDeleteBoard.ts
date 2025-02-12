import { useMutation } from '@tanstack/react-query';
import request from '@utils/request';

type Request = {
  id: number;
};

const useDeleteBoard = () => {
  const deleteBoard = async ({ id }: Request) => {
    await request<null, null, null>({
      uri: `/api/article/board-types/${id}`,
      method: 'delete',
    });
  };

  const { mutateAsync } = useMutation({
    mutationFn: deleteBoard,
  });

  return { deleteBoard: mutateAsync };
};

export default useDeleteBoard;
