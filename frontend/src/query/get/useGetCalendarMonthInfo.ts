import { QUERY_KEYS } from '@constants/keys';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@utils/request';
import { MonthSchedule } from '@components/calendar/CalendarType';

interface MonthInfoProps {
  year: number;
  month: number;
}

export default function useGetCalendarMonthInfo({ year, month }: MonthInfoProps) {
  const fetchMonthInfo = async () => {
    const response = await request<null, MonthSchedule[], null>({
      uri: `/api/calendar/month-schedule?year=${year}&month=${month}`,
      method: 'get',
    });

    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_MONTH_INFO, { year, month }],
    queryFn: fetchMonthInfo,
  });

  return { data };
}
