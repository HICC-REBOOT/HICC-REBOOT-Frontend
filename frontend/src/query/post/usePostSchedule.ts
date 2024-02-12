import { ScheduleType } from '@components/calendar/CalendarType';
import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface usePostScheduleProps {
  name: string;
  startDateTime: string;
  endDateTime: string;
  type: ScheduleType;
  content: string;
}

interface postScheduleRequestBody {
  name: string;
  startDateTime: string;
  endDateTime: string;
  type: ScheduleType;
  content: string;
}

function usePostSchedule({ name, startDateTime, endDateTime, type, content }: usePostScheduleProps) {
  const postSchedule = async () => {
    const data: postScheduleRequestBody = {
      name,
      startDateTime,
      endDateTime,
      type,
      content,
    };

    await request<postScheduleRequestBody, null, null>({
      uri: '/api/calendar/schedule',
      method: 'post',
      data,
    });

    return true;
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.POST_SCHEDULE, { name, startDateTime, endDateTime, type, content }],
    mutationFn: postSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.POST_SCHEDULE, { name, startDateTime, endDateTime, type, content }],
      });
      window.location.reload();
    },
  });

  return {
    postSchedule: mutate,
    isPending,
  };
}

export default usePostSchedule;
