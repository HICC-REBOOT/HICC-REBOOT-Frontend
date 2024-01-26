import { ArticleDetailType } from '@components/community/CommunityType';
import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface UseGetArticleDetailProps {
  articleId: number;
}

function useGetArticleDetail({ articleId }: UseGetArticleDetailProps) {
  const fetchArticleDetail = async () => {
    const response = await request<null, ArticleDetailType, null>({
      uri: `/api/article/${articleId}`,
      method: 'get',
    });

    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_ARTICLE_DETAIL, articleId],
    queryFn: fetchArticleDetail,
  });

  return { data };
}

export default useGetArticleDetail;
