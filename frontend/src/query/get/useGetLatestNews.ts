import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

interface News {
  articleId: number;
  grade: string;
  name: string;
  date: string;
  imageExistence: boolean;
  subject: string;
}

interface NewsResponse {
  content: News[];
}

function useGetLatestNews() {
  const fetchGetLatestNews = async () => {
    const response = await request<null, NewsResponse, null>({
      uri: '/api/main/latest-news?page=0&size=3',
      method: 'get',
    });

    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_LATEST_NEWS],
    queryFn: fetchGetLatestNews,
  });

  return { data };
}

export default useGetLatestNews;
