import moment from 'moment';

function time(stringTypeTime: string) {
  const koreanTime = moment(stringTypeTime);
  return koreanTime.format('YYYY-MM-DD HH:mm');
}

export default time;
