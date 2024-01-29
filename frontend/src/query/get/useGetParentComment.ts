import { ParentComment } from '@components/community/CommunityType';
import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface UseGetParentCommentProps {
  articleId: number;
}

function useGetParentComment({ articleId }: UseGetParentCommentProps) {
  const fetchParentComment = async () => {
    const response = await request<null, ParentComment[], null>({
      uri: `/api/comment/parent/${articleId}`,
      method: 'get',
    });

    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_PARENT_COMMENT, articleId],
    queryFn: fetchParentComment,
  });

  return { comments: data };
}

export default useGetParentComment;
