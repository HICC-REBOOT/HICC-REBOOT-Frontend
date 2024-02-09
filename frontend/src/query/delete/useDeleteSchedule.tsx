import { QUERY_KEYS } from '@constants/keys';
import ROUTE from '@constants/route';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';
import { useNavigate } from 'react-router-dom';

interface useDeleteScheduleProps {
  scheduleId: number;
}

function useDeleteSchedule() {
  const deleteSchedule = async (scheduleId: number) => {
    await request<null, null, null>({
      uri: `/api/calendar/schedule/${scheduleId}`,
      method: 'delete',
    });

    return true;
  };

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.DELETE_SCHEDULE],
    mutationFn: deleteSchedule,
    onSuccess: () => {
      alert('일정이 성공적으로 삭제되었습니다.');
    },
  });

  return {
    deleteSchedule: mutate,
    isPending,
  };
}

export default useDeleteSchedule;
