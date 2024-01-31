import dayjs from 'dayjs';

function time(stringTypeTime: string) {
  if (stringTypeTime === '') {
    return '';
  }

  const koreanTime = dayjs(stringTypeTime);
  return koreanTime.format('YYYY-MM-DD HH:mm');
}

export default time;
