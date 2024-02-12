import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';
import { DaySchedule } from '@components/calendar/CalendarType';

interface DayInfoProps {
  year: number;
  month: number;
  date: number;
}

interface DayInfoParams {
  year: number;
  month: number;
  day: number;
}

export default function useGetCalendarDayInfo({ year, month, date }: DayInfoProps) {
  const fetchDayInfo = async () => {
    const response = await request<null, DaySchedule[], DayInfoParams>({
      uri: `/api/calendar/date-schedule`,
      method: 'get',
      params: {
        year,
        month,
        day: date,
      },
    });
    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_DAY_INFO, { year, month, date }],
    queryFn: fetchDayInfo,
  });

  return { data };
}
