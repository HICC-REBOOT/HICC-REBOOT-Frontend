import { QUERY_KEYS } from '@constants/keys';
import ROUTE from '@constants/route';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface UseDeleteCommentProps {
  articleId: number;
  commentId: number;
}

function useDeleteMyComment({ articleId, commentId }: UseDeleteCommentProps) {
  const deleteComment = async () => {
    await request<null, null, null>({
      uri: `/api/comment/${commentId}`,
      method: 'delete',
    });

    return true;
  };

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.DELETE_PARENT_COMMENT, commentId],
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PARENT_COMMENT, articleId],
      });

      alert(`댓글이 삭제되었습니다.`);

      navigate(`${ROUTE.PROFILE.BASE}/${ROUTE.PROFILE.MYCOMMENTS}`);
      window.location.reload();
    },
  });

  return {
    deleteComment: mutate,
    isPending,
  };
}

export default useDeleteMyComment;
