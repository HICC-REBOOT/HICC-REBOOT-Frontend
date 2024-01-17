import sidebarStore from '@libs/store/sidebarState';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

function useSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarStore);

  const changeSidebarState = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, [setIsSidebarOpen]);

  return {
    isSidebarOpen,
    changeSidebarState,
  };
}

export default useSidebar;
