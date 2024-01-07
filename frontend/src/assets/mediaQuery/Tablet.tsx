import React from 'react';
import { useMediaQuery } from 'react-responsive';
import BREAKPOINT from '@constants/breakpoint';

interface TabletProps {
  children: React.JSX.Element;
}

function Tablet({ children }: TabletProps) {
  const isTablet = useMediaQuery({
    query: `(min-width:${BREAKPOINT.TABLET}px) and (max-width:${
      BREAKPOINT.DESKTOP - 0.1
    }px)`,
  });

  return <>{isTablet && children}</>;
}

export default Tablet;
