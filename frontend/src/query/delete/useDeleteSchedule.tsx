import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';
import dayjs from 'dayjs';
import useModal from '@hooks/useCalendarModal';

function useDeleteSchedule() {
  const deleteSchedule = async (scheduleId: number) => {
    await request<null, null, null>({
      uri: `/api/calendar/schedule/${scheduleId}`,
      method: 'delete',
    });

    return true;
  };

  const queryClient = useQueryClient();

  const { selectedDateInfo } = useModal();
  const selectedYear = dayjs(selectedDateInfo?.toString()).year();
  const selectedMonth = dayjs(selectedDateInfo?.toString()).month() + 1;
  const selectedDate = dayjs(selectedDateInfo?.toString()).date();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.DELETE_SCHEDULE],
    mutationFn: deleteSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_DAY_INFO, { year: selectedYear, month: selectedMonth, date: selectedDate }],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_MONTH_INFO, { year: selectedYear, month: selectedMonth }],
      });

      window.location.reload();
    },
  });

  return {
    deleteSchedule: mutate,
    isPending,
  };
}

export default useDeleteSchedule;
