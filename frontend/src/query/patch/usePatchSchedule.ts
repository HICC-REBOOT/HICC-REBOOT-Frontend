import { ScheduleType } from '@components/calendar/CalendarType';
import { Board } from '@components/community/CommunityType';
import { QUERY_KEYS } from '@constants/keys';
import ROUTE from '@constants/route';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_SCHEDULE],
    mutationFn: updateSchedule,
    // onSuccess: (scheduleId: number) => {
    //   queryClient.removeQueries({
    //     queryKey: [QUERY_KEYS.GET_EACH_INFO, scheduleId],
    //   });
    //   queryClient.removeQueries({
    //     queryKey: [QUERY_KEYS.GET_DAY_INFO],
    //   });

    //   alert(`${scheduleId} 일정이 수정되었습니다.`);
    // },
  });

  return {
    updateSchedule: mutate,
    isPending,
  };
}

export default usePatchSchedule;
