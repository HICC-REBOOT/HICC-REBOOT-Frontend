import React, { useEffect } from 'react';
import 'dayjs/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { ConfigProvider, DatePicker } from 'antd';
import theme from '@styles/theme';
import useModal from '@hooks/useCalendarModal';
import { ReactComponent as ArrowIcon } from '@assets/image/icon/arrow2.svg';
import { useRecoilState } from 'recoil';
import dayjs from 'dayjs';
import { endTimeState, startTimeState } from '../../state/calendar';
import * as D from './style/DatePicker.style';

interface DatePickerProps {
  startDateTime: string;
  endDateTime: string;
  scheduleId: number | undefined;
}

export default function DatePickerBox({ startDateTime, endDateTime, scheduleId }: DatePickerProps) {
  const [startTime, setStartTime] = useRecoilState(startTimeState);
  const [endTime, setEndTime] = useRecoilState(endTimeState);

  useEffect(() => {
    setStartTime(dayjs(startDateTime));
    setEndTime(dayjs(endDateTime));
  }, [scheduleId]);

  return (
    <D.Container>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: theme.colors.black,
            colorBorder: 'none',
            colorTextPlaceholder: theme.colors.white,
            borderRadius: 8,
            colorPrimary: theme.colors.point1,
          },
          components: {
            DatePicker: {
              activeShadow: 'none',
              paddingInline: 10,
              paddingBlock: 7,
              cellHeight: 16,
              cellWidth: 20,
              timeCellHeight: 20,
              timeColumnWidth: 28,
            },
          },
        }}
      >
        <D.CustomDatePicker
          value={startTime}
          onChange={(date, _) => setStartTime(date)}
          format={'MM.DD ddd A hh:mm'}
          suffixIcon={null}
          locale={locale}
          inputReadOnly={true}
          showTime
          allowClear={false}
        />
      </ConfigProvider>
      <ArrowIcon />
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: theme.colors.black,
            colorBorder: 'none',
            colorTextPlaceholder: theme.colors.white,
            borderRadius: 8,
            colorPrimary: theme.colors.point1,
          },
          components: {
            DatePicker: {
              activeShadow: 'none',
              paddingInline: 10,
              paddingBlock: 7,
              cellHeight: 16,
              cellWidth: 20,
              timeCellHeight: 20,
              timeColumnWidth: 28,
            },
          },
        }}
      >
        <D.CustomDatePicker
          value={endTime}
          onChange={(date, _) => setEndTime(date)}
          format={'MM.DD ddd A hh:mm'}
          suffixIcon={null}
          locale={locale}
          inputReadOnly={true}
          showTime
          allowClear={false}
        />
      </ConfigProvider>
    </D.Container>
  );
}
