import { RefObject, useEffect } from 'react';

function useOutsideClick(ref: RefObject<HTMLDivElement>, func: () => void) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        func();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, func]);
}

export default useOutsideClick;
