import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface UsePostNestedCommentProps {
  articleId: number;
}

interface WriteNestedCommentRequestBody {
  articleId: number;
  parentCommentId: number;
  content: string;
}

interface WriteNestedCommentParameter {
  parentCommentId: number;
  content: string;
}

function usePostNestedComment({ articleId }: UsePostNestedCommentProps) {
  const writeNestedComment = async (comment: WriteNestedCommentParameter) => {
    const data: WriteNestedCommentRequestBody = {
      articleId,
      parentCommentId: comment.parentCommentId,
      content: comment.content,
    };

    await request<WriteNestedCommentRequestBody, null, null>({
      uri: '/api/comment',
      method: 'post',
      data,
    });

    return true;
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.POST_NESTED_COMMENT, articleId],
    mutationFn: writeNestedComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_NESTED_COMMENT, articleId],
      });
    },
  });

  return {
    writeNestedComment: mutate,
    isPending,
  };
}

export default usePostNestedComment;
