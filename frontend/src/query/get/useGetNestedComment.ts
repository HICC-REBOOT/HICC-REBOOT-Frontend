import { NestedCommentType } from '@components/community/CommunityType';
import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface UseGetNestedCommentProps {
  articleId: number;
}

function useGetNestedComment({ articleId }: UseGetNestedCommentProps) {
  const fetchNestedComment = async () => {
    const response = await request<null, NestedCommentType[], null>({
      uri: `/api/comment/child/${articleId}`,
      method: 'get',
    });

    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_NESTED_COMMENT, articleId],
    queryFn: fetchNestedComment,
  });

  return {
    nestedComments: data,
  };
}

export default useGetNestedComment;
