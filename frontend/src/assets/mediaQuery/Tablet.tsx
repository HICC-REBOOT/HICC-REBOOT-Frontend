import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface TabletProps {
  children: React.JSX.Element;
}

function Tablet({ children }: TabletProps) {
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1439px)',
  });

  return <>{isTablet && children}</>;
}

export default Tablet;
