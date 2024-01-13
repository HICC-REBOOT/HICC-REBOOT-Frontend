import BREAKPOINT from '@constants/breakpoint';
import { useMediaQuery } from 'react-responsive';

function DeviceProvider() {
  const isMobile = useMediaQuery({
    query: `(max-width:${BREAKPOINT.TABLET - 0.1}px)`,
  });

  const isTablet = useMediaQuery({
    query: `(min-width:${BREAKPOINT.TABLET}px) and (max-width:${
      BREAKPOINT.DESKTOP - 0.1
    }px)`,
  });

  const isDesktop = useMediaQuery({
    query: `(min-width:${BREAKPOINT.DESKTOP}px)`,
  });

  if (isMobile === true) {
    return 'mobile';
  }

  if (isTablet === true) {
    return 'tablet';
  }

  if (isDesktop === true) {
    return 'desktop';
  }

  return 'desktop';
}

export default DeviceProvider;
