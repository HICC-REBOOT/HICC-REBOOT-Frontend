import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

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

  const { mutate, isPending } = useMutation({
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
    isPending,
  };
}

export default useDeleteComment;
