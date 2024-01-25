import { Board } from '@components/community/CommunityType';
import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface ImageEnroll {
  fileName: string;
  fileNameExtension: string;
  key: string;
  url: string;
}

interface WritePostRequestBody {
  images: ImageEnroll[];
  board: Board;
  subject: string;
  content: string;
}

function usePostArticle() {
  const writeArticle = async (data: WritePostRequestBody) => {
    await request<WritePostRequestBody, null, null>({
      uri: '/api/article',
      method: 'post',
      data,
    });

    return true;
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.POST_ARTICLE],
    mutationFn: writeArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PAGEABLE, '/api/article'],
      });
    },
  });

  return {
    writeArticle: mutate,
    isPending,
  };
}

export default usePostArticle;
