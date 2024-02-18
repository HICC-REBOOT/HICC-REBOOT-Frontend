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
    const response = await request<null, MonthSchedule[], MonthInfoProps>({
      uri: `/api/calendar/month-schedule`,
      method: 'get',
      params: {
        year,
        month,
      },
    });
    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.GET_MONTH_INFO, { year, month }],
    queryFn: fetchMonthInfo,
  });

  return { data };
}
