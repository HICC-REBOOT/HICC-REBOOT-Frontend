import { ScheduleType } from '@components/calendar/CalendarType';
import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';
import dayjs from 'dayjs';
import useModal from '@hooks/useCalendarModal';

interface UpdateScheduleRequestBody {
  name: string;
  startDateTime: string;
  endDateTime: string;
  type: ScheduleType;
  content: string;
}

interface UpdateScheduleParams {
  name: string;
  startDateTime: string;
  endDateTime: string;
  type: ScheduleType;
  content: string;
  scheduleId: number;
}

function usePatchSchedule() {
  const updateSchedule = async ({
    name,
    startDateTime,
    endDateTime,
    type,
    content,
    scheduleId,
  }: UpdateScheduleParams) => {
    const data: UpdateScheduleRequestBody = {
      name,
      startDateTime,
      endDateTime,
      type,
      content,
    };

    await request<UpdateScheduleRequestBody, null, null>({
      uri: `/api/calendar/schedule/${scheduleId}`,
      method: 'patch',
      data,
    });

    return scheduleId;
  };

  const queryClient = useQueryClient();

  const { selectedDateInfo, scheduleId } = useModal();
  const selectedYear = dayjs(selectedDateInfo?.toString()).year();
  const selectedMonth = dayjs(selectedDateInfo?.toString()).month() + 1;
  const selectedDate = dayjs(selectedDateInfo?.toString()).date();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_SCHEDULE],
    mutationFn: updateSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_DAY_INFO, { year: selectedYear, month: selectedMonth, date: selectedDate }],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_MONTH_INFO, { year: selectedYear, month: selectedMonth }],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_EACH_INFO, scheduleId],
      });

      window.location.reload();
    },
  });

  return {
    updateSchedule: mutate,
    isPending,
  };
}

export default usePatchSchedule;
