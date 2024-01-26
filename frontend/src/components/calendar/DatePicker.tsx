import React from 'react';
import 'dayjs/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { ConfigProvider, DatePicker } from 'antd';
import theme from '@styles/theme';
import useModal from '@hooks/useCalendarModal';
import dayjs from 'dayjs';
import * as D from './style/DatePicker.style';

export default function DatePickerBox() {
  const { isNewSchedule } = useModal();

  return (
    <D.Container>
      <D.DateWrapper>
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: theme.colors.black,
              colorBorder: 'none',
              colorTextPlaceholder: theme.colors.white,
              borderRadius: 8,
            },
            components: {
              DatePicker: {
                activeShadow: 'none',
                paddingInline: 0,
                paddingBlock: 0,
              },
            },
          }}
        >
          <D.CustomDatePicker
            format={'MM.DD ddd'}
            value={dayjs(new Date())}
            suffixIcon={null}
            locale={locale}
            inputReadOnly={true}
            style={{ padding: 0 }}
          />
          <D.CustomTimePicker
            use12Hours
            format={'hh:mm A'}
            value={dayjs(new Date())}
            suffixIcon={null}
            inputReadOnly={true}
            style={{ padding: 0 }}
          />
        </ConfigProvider>
      </D.DateWrapper>
      <D.NextIcon />
      <D.DateWrapper>
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: theme.colors.black,
              colorBorder: 'none',
              colorTextPlaceholder: theme.colors.white,
              borderRadius: 8,
            },
            components: {
              DatePicker: {
                activeShadow: 'none',
                paddingInline: 0,
                paddingBlock: 10,
              },
            },
          }}
        >
          <D.CustomDatePicker
            format={'MM.DD ddd'}
            value={dayjs(new Date()).add(1, 'hour')}
            suffixIcon={null}
            locale={locale}
            inputReadOnly={true}
            style={{ padding: 0 }}
          />
          <D.CustomTimePicker
            use12Hours
            format={'hh:mm A'}
            value={dayjs(new Date()).add(1, 'hour')}
            suffixIcon={null}
            inputReadOnly={true}
            style={{ padding: 0 }}
          />
        </ConfigProvider>
      </D.DateWrapper>
    </D.Container>
  );
}
