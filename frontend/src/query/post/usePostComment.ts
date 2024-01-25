import { QUERY_KEYS } from '@constants/keys';
import request from '@utils/request';
import { useMutation, useQueryClient } from 'react-query';

interface UsePostCommentProps {
  articleId: number;
}

interface WriteCommentRequestBody {
  articleId: number;
  parentCommentId: number;
  content: string;
}

function usePostComment({ articleId }: UsePostCommentProps) {
  const writeComment = async (content: string) => {
    const data: WriteCommentRequestBody = {
      articleId,
      parentCommentId: -1,
      content,
    };

    await request<WriteCommentRequestBody, null, null>({
      uri: '/api/comment',
      method: 'post',
      data,
    });

    return true;
  };

  const queryClient = useQueryClient();

  // 댓글을 작성했기 때문에 성공했을 때 댓글 다시 불러오기
  const { mutate, isLoading } = useMutation({
    mutationKey: [QUERY_KEYS.POST_PARENT_COMMENT, articleId],
    mutationFn: writeComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PARENT_COMMENT, articleId],
      });
    },
  });

  return {
    writeComment: mutate,
    isLoading,
  };
}

export default usePostComment;
