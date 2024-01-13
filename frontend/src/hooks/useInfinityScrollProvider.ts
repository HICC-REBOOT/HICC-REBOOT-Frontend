import BREAKPOINT from '@constants/breakpoint';
import { useMediaQuery } from 'react-responsive';

function useInfinityScrollProvider() {
  const isInfinityScroll = useMediaQuery({
    query: `(max-width:${BREAKPOINT.TABLET - 0.1}px)`,
  });

  return {
    isInfinityScroll,
  };
}

export default useInfinityScrollProvider;
