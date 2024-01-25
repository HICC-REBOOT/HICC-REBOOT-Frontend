import { QUERY_KEYS } from '@constants/keys';
import request from '@utils/request';
import { useMutation, useQueryClient } from 'react-query';

interface UseDeleteCommentProps {
  articleId: number;
  commentId: number;
}

function useDeleteComment({ articleId, commentId }: UseDeleteCommentProps) {
  const deleteComment = async () => {
    await request<null, null, null>({
      uri: `/api/comment/${commentId}`,
      method: 'delete',
    });

    return true;
  };

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationKey: [QUERY_KEYS.DELETE_PARENT_COMMENT, commentId],
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PARENT_COMMENT, articleId],
      });
    },
  });

  return {
    deleteComment: mutate,
    isLoading,
  };
}

export default useDeleteComment;
