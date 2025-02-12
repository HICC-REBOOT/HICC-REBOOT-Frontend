import { NewImageUrl } from '@components/community/CommunityType';
import { QUERY_KEYS } from '@constants/keys';
import ROUTE from '@constants/route';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';
import { useNavigate } from 'react-router-dom';

interface WritePostRequestBody {
  images: NewImageUrl[];
  boardTypeId: number;
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
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.POST_ARTICLE],
    mutationFn: writeArticle,
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.PAGEABLE, { uri: '/api/article' }],
      });

      // 등록이 완료되면 목록으로 이동
      navigate(`${ROUTE.COMMUNITY.BASE}`);
    },
  });

  return {
    writeArticle: mutate,
    isPending,
  };
}

export default usePostArticle;
