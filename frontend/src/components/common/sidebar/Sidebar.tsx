import React, { useEffect } from 'react';
import { NotDesktop } from '@assets/mediaQuery';
import { Variants } from 'framer-motion';
import Close from '@assets/image/icon/close.svg';
import ROUTE from '@constants/route';
import { useLocation } from 'react-router-dom';
import * as S from './Sidebar.style';

const asideVarients: Variants = {
  initial: { height: 0, left: 0, top: '-27.6rem' },
  open: { height: '27.6rem', top: 0 },
  exit: { height: 0, top: '-27.6rem', transition: { duration: 0.3 } },
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
  const location = useLocation();

  useEffect(() => {
    close();
  }, [close, location.pathname]);

  return (
    <NotDesktop>
      <>
        <S.Container initial="initial" animate="open" exit="exit" variants={asideVarients}>
          <S.Inner initial="closed" animate="open" exit="closed" variants={sideVarients}>
            <S.Tab>
              <S.CloseButton src={Close} alt="close" onClick={close} />
            </S.Tab>
            <S.Tab>
              <S.LinkButton to={ROUTE.CALENDAR}>calendar</S.LinkButton>
            </S.Tab>
            <S.Tab>
              <S.LinkButton to={ROUTE.COMMUNITY.BASE}>community</S.LinkButton>
            </S.Tab>
            <S.Tab>
              <S.JoinHICC>Join HICC</S.JoinHICC>
            </S.Tab>
            <S.Tab>
              <S.Auth to={ROUTE.LOGIN}>Log in</S.Auth>
            </S.Tab>
          </S.Inner>
        </S.Container>
        <S.Backdrop onClick={close} />
      </>
    </NotDesktop>
  );
}

export default Sidebar;
