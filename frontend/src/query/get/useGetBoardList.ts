import { Board } from '@components/type/CommonType';
import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';

const useGetBoardList = () => {
  const fetchBoardList = async () => {
    const response = await request<null, Board[], null>({
      uri: `/api/article/board-types`,
      method: 'get',
    });

    return response.data;
  };

  const { data, ...rest } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_BOARD_LIST],
    queryFn: fetchBoardList,
    select: (boardList) => [
      { boardTypeId: -1, boardType: '전체게시판' },
      ...boardList.sort((a, b) => a.boardType.localeCompare(b.boardType)),
    ],
  });

  return { boardList: data, ...rest };
};

export default useGetBoardList;
