import { QUERY_KEYS } from '@constants/keys';
import ROUTE from '@constants/route';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';
import { useNavigate } from 'react-router-dom';

interface UseDeleteArticleProps {
  articleId: number;
}

function useDeleteArticle({ articleId }: UseDeleteArticleProps) {
  const deleteArticle = async () => {
    await request<null, null, null>({
      uri: `/api/article/${articleId}`,
      method: 'delete',
    });

    return true;
  };

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.DELETE_ARTICLE, articleId],
    mutationFn: deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PARENT_COMMENT, articleId],
      });

      alert(`${articleId} 게시글이 삭제되었습니다.`);

      // 등록이 완료되면 목록으로 이동
      navigate(`${ROUTE.COMMUNITY.BASE}`);
    },
  });

  return {
    deleteArticle: mutate,
    isPending,
  };
}

export default useDeleteArticle;
