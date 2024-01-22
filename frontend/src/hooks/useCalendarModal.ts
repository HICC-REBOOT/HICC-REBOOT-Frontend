import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { isNewScheduleState, modalState } from '../state/calendar';

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

  return {
    isModalOpen,
    changeModalState,
    isNewSchedule,
    changeIsNewState,
  };
}
