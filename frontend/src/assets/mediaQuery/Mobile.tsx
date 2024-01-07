import React from 'react';
import { useMediaQuery } from 'react-responsive';
import BREAKPOINT from '@constants/breakpoint';

interface MobileProps {
  children: React.JSX.Element;
}

function Mobile({ children }: MobileProps) {
  const isMobile = useMediaQuery({
    query: `(max-width:${BREAKPOINT.TABLET - 1}px)`,
  });

  return <>{isMobile && children}</>;
}

export default Mobile;
