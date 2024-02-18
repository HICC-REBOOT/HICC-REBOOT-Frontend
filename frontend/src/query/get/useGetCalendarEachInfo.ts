import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';
import { MonthSchedule } from '@components/calendar/CalendarType';

interface EachInfoProps {
  scheduleId: number;
}

export default function useGetCalendarEachInfo({ scheduleId }: EachInfoProps) {
  const fetchEachInfo = async () => {
    if (scheduleId === -1) return null;

    const response = await request<null, MonthSchedule, null>({
      uri: `/api/calendar/schedule/${scheduleId}`,
      method: 'get',
    });
    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_EACH_INFO, scheduleId],
    queryFn: fetchEachInfo,
  });

  return { data };
}
