import React from 'react';
import 'dayjs/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { ConfigProvider, DatePicker } from 'antd';
import theme from '@styles/theme';
import * as D from './style/DatePicker.style';

export default function DatePickerBox() {
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
            format={'DD.MM ddd'}
            placeholder="01.01 수"
            suffixIcon={null}
            locale={locale}
            inputReadOnly={true}
            style={{ padding: 0 }}
          />
          <D.CustomTimePicker
            use12Hours
            format={'hh:mm A'}
            placeholder="10:00 AM"
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
            format={'DD.MM ddd'}
            placeholder="01.01 수"
            suffixIcon={null}
            locale={locale}
            inputReadOnly={true}
            style={{ padding: 0 }}
          />
          <D.CustomTimePicker
            use12Hours
            format={'hh:mm A'}
            placeholder="10:00 AM"
            suffixIcon={null}
            inputReadOnly={true}
            style={{ padding: 0 }}
          />
        </ConfigProvider>
      </D.DateWrapper>
    </D.Container>
  );
}
