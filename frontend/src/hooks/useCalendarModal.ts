import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { currentCalendarViewState, isNewScheduleState, modalState, selectedDateState } from '../state/calendar';

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
  const changeModalState = useCallback(
    (bool: boolean) => {
      setIsModalOpen(bool);
    },
    [isModalOpen],
  );

  const [isNewSchedule, setIsNewSchedule] = useRecoilState(isNewScheduleState);
  const changeIsNewState = useCallback(
    (bool: boolean) => {
      setIsNewSchedule(bool);
    },
    [isNewSchedule],
  );

  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  const [currentCalendarView, setCurrentCalendarView] = useRecoilState(currentCalendarViewState);

  return {
    isModalOpen,
    changeModalState,
    isNewSchedule,
    changeIsNewState,
    selectedDate,
    setSelectedDate,
    currentCalendarView,
    setCurrentCalendarView,
  };
}
