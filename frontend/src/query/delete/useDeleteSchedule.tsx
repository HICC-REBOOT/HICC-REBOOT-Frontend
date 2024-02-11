import { QUERY_KEYS } from '@constants/keys';
import { useMutation } from '@tanstack/react-query';
import request from '@utils/request';

function useDeleteSchedule() {
  const deleteSchedule = async (scheduleId: number) => {
    await request<null, null, null>({
      uri: `/api/calendar/schedule/${scheduleId}`,
      method: 'delete',
    });

    return true;
  };

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.DELETE_SCHEDULE],
    mutationFn: deleteSchedule,
  });

  return {
    deleteSchedule: mutate,
    isPending,
  };
}

export default useDeleteSchedule;
