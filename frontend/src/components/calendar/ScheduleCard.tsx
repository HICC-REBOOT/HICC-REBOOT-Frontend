import React, { useState } from 'react';
import { Variants } from 'framer-motion';
import arrow from '@assets/image/icon/arrow.svg';
import { ReactComponent as EditIcon } from '@assets/image/icon/edit.svg';
import useAuth from '@hooks/useAuth';
import dayjs from 'dayjs';
import useModal from '@hooks/useCalendarModal';
import * as S from './style/ScheduleCard.style';
import { DaySchedule } from './CalendarType';

const variants: Variants = {
  notShow: {
    transform: 'rotate(0deg)',
    transition: { duration: 0.2 },
  },
  show: {
    transform: 'rotate(180deg)',
    transition: { duration: 0.2 },
  },
};

interface ScheduleCardProps {
  dayInfo: DaySchedule;
}

export default function ScheduleCard({ dayInfo }: ScheduleCardProps) {
  const { changeModalState, changeScheduleId } = useModal();
  const { isAdmin } = useAuth();

  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  const { selectedDateInfo } = useModal();
  const showStartTime = () => {
    if (dayjs(selectedDateInfo as Date).format('YYYY-MM-DD') > dayjs(dayInfo.startDateTime).format('YYYY-MM-DD'))
      return (
        <S.Time1>
          00:00 <S.Time2>AM</S.Time2>
        </S.Time1>
      );
    return (
      <S.Time1>
        {dayjs(dayInfo.startDateTime).format('hh:mm')} <S.Time2>{dayjs(dayInfo.startDateTime).format('A')}</S.Time2>
      </S.Time1>
    );
  };
  const showEndTime = () => {
    if (dayjs(selectedDateInfo as Date).format('YYYY-MM-DD') < dayjs(dayInfo.endDateTime).format('YYYY-MM-DD'))
      return <S.Time2>24:00 PM</S.Time2>;
    return <S.Time2>{dayjs(dayInfo.endDateTime).format('hh:mm A')}</S.Time2>;
  };

  const showModal = () => {
    changeScheduleId(dayInfo.scheduleId);
    changeModalState(true);
  };

  return (
    <S.Container>
      <S.Left>
        <S.TimeContainer type={dayInfo.type}>
          {showStartTime()}
          {showEndTime()}
        </S.TimeContainer>
        <S.InfoContainer>
          <S.Title>{dayInfo.name}</S.Title>
          <S.Detail $isDetailOpen={isDetailOpen}>{dayInfo.content}</S.Detail>
        </S.InfoContainer>
      </S.Left>
      {isAdmin ? (
        <S.Btn onClick={showModal}>
          <EditIcon />
        </S.Btn>
      ) : (
        <S.ArrowIcon
          variants={variants}
          alt="arrow"
          src={arrow}
          initial="notShow"
          animate={isDetailOpen ? 'show' : 'notShow'}
          onClick={() => setIsDetailOpen(!isDetailOpen)}
        />
      )}
    </S.Container>
  );
}
