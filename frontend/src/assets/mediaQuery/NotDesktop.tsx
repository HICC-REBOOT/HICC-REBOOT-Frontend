import React from 'react';
import { useMediaQuery } from 'react-responsive';
import BREAKPOINT from '@constants/breakpoint';

interface DesktopProps {
  children: React.JSX.Element;
}

function NotDesktop({ children }: DesktopProps) {
  const isDesktop = useMediaQuery({
    query: `(min-width:${BREAKPOINT.DESKTOP}px)`,
  });

  return <>{!isDesktop && children}</>;
}

export default NotDesktop;
