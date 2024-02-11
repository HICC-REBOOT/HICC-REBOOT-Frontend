import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface UseDeleteArticleProps {
  articleId: number;
}

function useDeleteMyArticle({ articleId }: UseDeleteArticleProps) {
  const deleteArticle = async () => {
    await request<null, null, null>({
      uri: `/api/article/${articleId}`,
      method: 'delete',
    });

    return true;
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.DELETE_ARTICLE, articleId],
    mutationFn: deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PAGEABLE, { uri: '/api/article' }],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ARTICLE_DETAIL, articleId],
      });

      alert(`게시글이 삭제되었습니다.`);

      window.location.reload();
    },
  });

  return {
    deleteArticle: mutate,
    isPending,
  };
}

export default useDeleteMyArticle;
