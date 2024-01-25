import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface UseDeleteNestedCommentProps {
  articleId: number;
  commentId: number;
}

function useDeleteNestedComment({ articleId, commentId }: UseDeleteNestedCommentProps) {
  const deleteNestedComment = async () => {
    await request<null, null, null>({
      uri: '/api/comment',
      method: 'delete',
    });

    return true;
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.DELETE_PARENT_COMMENT, commentId],
    mutationFn: deleteNestedComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PARENT_COMMENT, articleId],
      });
    },
  });

  return {
    deleteNestedComment: mutate,
    isPending,
  };
}

export default useDeleteNestedComment;
