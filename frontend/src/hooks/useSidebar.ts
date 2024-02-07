import sidebarStore from '@libs/store/sidebarState';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

function useSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarStore);

  const openSidebar = useCallback(() => {
    setIsSidebarOpen(true);
  }, [setIsSidebarOpen]);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, [setIsSidebarOpen]);

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
  };
}

export default useSidebar;
