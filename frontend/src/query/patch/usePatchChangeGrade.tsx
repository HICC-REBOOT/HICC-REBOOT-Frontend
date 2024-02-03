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
      alert(`등급변경이 완료되었습니다.`);
      queryClient.invalidateQueries({
        queryKey: ['get-members'],
      });
      queryClient.invalidateQueries({
        queryKey: ['get-approval-list'],
      });
    },
  });

  return {
    updateGrade: mutate,
    isPending,
  };
}

export default usePatchChangeGrade;
