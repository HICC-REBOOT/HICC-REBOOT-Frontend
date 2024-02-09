import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';
import { DaySchedule } from '@components/calendar/CalendarType';

interface MonthInfoProps {
  year: number;
  month: number;
  date: number;
}

export default function useGetCalendarDayInfo({ year, month, date }: MonthInfoProps) {
  const fetchDayInfo = async () => {
    const response = await request<null, DaySchedule[], null>({
      uri: `/api/calendar/date-schedule?year=${year}&month=${month}&day=${date}`,
      method: 'get',
    });
    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_DAY_INFO, { year, month, date }],
    queryFn: fetchDayInfo,
  });

  return { data };
}
