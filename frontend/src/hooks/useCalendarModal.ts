import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import {
  currentCalendarViewState,
  isNewScheduleState,
  modalState,
  scheduleIdState,
  selectedDateState,
} from '../state/calendar';

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

  const [scheduleId, setScheduleId] = useRecoilState(scheduleIdState);
  const changeScheduleId = useCallback(
    (id: number) => {
      setScheduleId(id);
    },
    [scheduleId],
  );

  const [selectedDateInfo, setSelectedDateInfo] = useRecoilState(selectedDateState);

  const [currentCalendarView, setCurrentCalendarView] = useRecoilState(currentCalendarViewState);

  return {
    isModalOpen,
    changeModalState,
    isNewSchedule,
    changeIsNewState,
    scheduleId,
    changeScheduleId,
    selectedDateInfo,
    setSelectedDateInfo,
    currentCalendarView,
    setCurrentCalendarView,
  };
}
