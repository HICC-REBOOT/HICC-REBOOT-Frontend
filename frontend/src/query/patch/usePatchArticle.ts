import { Board } from '@components/community/CommunityType';
import { QUERY_KEYS } from '@constants/keys';
import ROUTE from '@constants/route';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';
import { useNavigate } from 'react-router-dom';

interface UsePatchArticleProps {
  articleId: number;
}

interface ImageEnroll {
  fileName: string;
  fileNameExtension: string;
  key: string;
  url: string;
}

interface UpdatePostRequestBody {
  images: ImageEnroll[];
  board: Board;
  subject: string;
  content: string;
}

function usePatchArticle({ articleId }: UsePatchArticleProps) {
  const updateArticle = async (data: UpdatePostRequestBody) => {
    await request<UpdatePostRequestBody, null, null>({
      uri: `/api/article/${articleId}`,
      method: 'patch',
      data,
    });

    return true;
  };

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_ARTICLE, articleId],
    mutationFn: updateArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PAGEABLE, '/api/article'],
      });

      alert(`${articleId} 게시글이 수정되었습니다.`);

      // 등록이 완료되면 목록으로 이동
      navigate(`${ROUTE.COMMUNITY.BASE}`);
    },
  });

  return {
    updateArticle: mutate,
    isPending,
  };
}

export default usePatchArticle;