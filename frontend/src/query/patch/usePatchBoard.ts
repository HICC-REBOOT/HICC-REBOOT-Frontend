import { useMutation } from '@tanstack/react-query';
import request from '@utils/request';

type RequestBody = {
  name: string;
};

type Request = RequestBody & {
  id: number;
};

const usePatchBoard = () => {
  const patchBoard = async ({ id, name }: Request) => {
    await request<RequestBody, null, null>({
      uri: `/api/article/board-types/${id}`,
      method: 'patch',
      data: { name },
    });
  };

  const { mutateAsync } = useMutation({
    mutationFn: patchBoard,
  });

  return { patchBoard: mutateAsync };
};

export default usePatchBoard;
