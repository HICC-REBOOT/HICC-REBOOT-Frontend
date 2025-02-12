import { useMutation } from '@tanstack/react-query';
import request from '@utils/request';

type RequestBody = {
  name: string;
};

const usePostBoard = () => {
  const postBoard = async (body: RequestBody) => {
    await request<RequestBody, null, null>({
      uri: '/api/article/board-types',
      method: 'post',
      data: body,
    });
  };

  const { mutateAsync } = useMutation({
    mutationFn: postBoard,
  });

  return { postBoard: mutateAsync };
};

export default usePostBoard;
