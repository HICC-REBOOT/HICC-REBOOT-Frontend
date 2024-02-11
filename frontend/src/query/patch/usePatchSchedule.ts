import { ScheduleType } from '@components/calendar/CalendarType';
import { QUERY_KEYS } from '@constants/keys';
import { useMutation } from '@tanstack/react-query';
import request from '@utils/request';

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

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_SCHEDULE],
    mutationFn: updateSchedule,
  });

  return {
    updateSchedule: mutate,
    isPending,
  };
}

export default usePatchSchedule;
