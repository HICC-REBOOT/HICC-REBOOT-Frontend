import React from 'react';
import { NotDesktop } from '@assets/mediaQuery';
import { Variants } from 'framer-motion';
import * as S from './Sidebar.style';

const asideVarients: Variants = {
  initial: { width: 0, right: 0 },
  open: { width: '80%' },
  exit: { width: 0, transition: { duration: 0.3 } },
};

const sideVarients: Variants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

interface SidebarProps {
  close: () => void;
}

function Sidebar({ close }: SidebarProps) {
  return (
    <NotDesktop>
      <>
        <S.Container initial="initial" animate="open" exit="exit" variants={asideVarients}>
          <S.Inner initial="closed" animate="open" exit="closed" variants={sideVarients}>
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index}>hello</div>
            ))}
          </S.Inner>
        </S.Container>
        <S.Backdrop onClick={close} />
      </>
    </NotDesktop>
  );
}

export default Sidebar;
