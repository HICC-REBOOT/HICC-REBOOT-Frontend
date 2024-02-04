import React from 'react';
import 'dayjs/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { ConfigProvider, DatePicker } from 'antd';
import theme from '@styles/theme';
import useModal from '@hooks/useCalendarModal';
import { ReactComponent as ArrowIcon } from '@assets/image/icon/arrow2.svg';
import dayjs from 'dayjs';
import * as D from './style/DatePicker.style';

export default function DatePickerBox() {
  const { isNewSchedule } = useModal();

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
          value={dayjs(new Date())}
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
          value={dayjs(new Date()).add(1, 'hour')}
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
