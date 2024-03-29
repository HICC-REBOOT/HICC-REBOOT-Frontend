import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface UsePatchGradeProps {
  id: number;
}
interface UpdateGradeRequestBody {
  grade: string;
}
function usePatchChangeGrade({ id }: UsePatchGradeProps) {
  const updateGrade = async (data: UpdateGradeRequestBody) => {
    await request<UpdateGradeRequestBody, null, null>({
      uri: `/api/admin/president/members/${id}`,
      method: 'patch',
      data,
    });

    return true;
  };
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['update-grade', id],
    mutationFn: updateGrade,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PAGEABLE, { uri: '/api/admin/members' }],
      });
      alert(`등급변경이 완료되었습니다.`);
      // 무한스크롤 버전에서 새로고침 하지 않으면 데이터가 바로 적용되지 않아 새로고침 필요
      window.location.reload();
    },
  });

  return {
    updateGrade: mutate,
    isPending,
  };
}

export default usePatchChangeGrade;
