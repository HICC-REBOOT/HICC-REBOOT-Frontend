import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface UsePatchGradeProps {
  studentNumber: string;
}
interface UpdateGradeRequestBody {
  grade: string;
}
function usePatchChangeGrade({ studentNumber }: UsePatchGradeProps) {
  const updateGrade = async (data: UpdateGradeRequestBody) => {
    await request<UpdateGradeRequestBody, null, null>({
      uri: `/api/admin/applicants/${studentNumber}`,
      method: 'patch',
      data,
    });

    return true;
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ['update-grade', studentNumber],
    mutationFn: updateGrade,
    onSuccess: () => {
      alert(`등급변경이 완료되었습니다.`);
    },
  });

  return {
    updateGrade: mutate,
    isPending,
  };
}

export default usePatchChangeGrade;
