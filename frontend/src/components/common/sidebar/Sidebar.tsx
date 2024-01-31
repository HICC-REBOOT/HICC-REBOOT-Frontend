import React, { useEffect, useState } from 'react';
import { NotDesktop } from '@assets/mediaQuery';
import { Variants } from 'framer-motion';
import Close from '@assets/image/icon/close.svg';
import ROUTE from '@constants/route';
import { useNavigate } from 'react-router-dom';
import useAuth from '@hooks/useAuth';
import logout from '@auth/logout';
import * as S from './Sidebar.style';

interface SidebarProps {
  close: () => void;
}

function Sidebar({ close }: SidebarProps) {
  const [height, setHeight] = useState<string>('34rem');

  const asideVarients: Variants = {
    initial: { height: 0, left: 0, top: `-${height}` },
    open: { height: `${height}`, top: 0 },
    exit: { height: 0, top: `-${height}`, transition: { duration: 0.3 } },
  };

  const { isLogin, isAdmin, setIsLogin } = useAuth();
  const navigate = useNavigate();

  const isLoginAndAdmin = isLogin && isAdmin;
  const isLoginButNotAdmin = isLogin && !isAdmin;
  const isNotLogin = !isLogin;

  useEffect(() => {
    setHeight(isLoginAndAdmin ? '39.5rem' : '34rem');
  }, [isLoginAndAdmin]);

  const setLogout = async () => {
    await logout();
    setIsLogin(false);
    navigate(ROUTE.HOME);
  };

  return (
    <NotDesktop>
      <>
        <S.Container initial="initial" animate="open" exit="exit" variants={asideVarients}>
          <S.Inner>
            <S.Tab>
              <S.CloseButton src={Close} alt="close" onClick={close} />
            </S.Tab>
            <S.Tab>
              <S.LinkButton to={ROUTE.HOME}>home</S.LinkButton>
            </S.Tab>
            <S.Tab>
              <S.LinkButton to={ROUTE.CALENDAR}>calendar</S.LinkButton>
            </S.Tab>
            <S.Tab>
              <S.LinkButton to={ROUTE.COMMUNITY.BASE}>community</S.LinkButton>
            </S.Tab>
            {/* 로그인 상태 && 어드민 */}
            {isLoginAndAdmin && (
              <>
                <S.Tab>
                  <S.LinkButton to={ROUTE.ADMIN.BASE}>관리자</S.LinkButton>
                </S.Tab>
                <S.Tab>
                  <S.LinkButton to={ROUTE.PROFILE.BASE}>마이페이지</S.LinkButton>
                </S.Tab>
              </>
            )}
            {/* 로그인 상태 && 일반유저 */}
            {isLoginButNotAdmin && (
              <S.Tab>
                <S.LinkButton to={ROUTE.PROFILE.BASE}>마이페이지</S.LinkButton>
              </S.Tab>
            )}
            {/* 로그아웃 상태 */}
            {isNotLogin && (
              <S.Tab>
                <S.JoinHICC to={ROUTE.SIGNUP}>Join HICC</S.JoinHICC>
              </S.Tab>
            )}
            <S.Tab>
              {isNotLogin ? (
                <S.Auth to={ROUTE.LOGIN}>Log in</S.Auth>
              ) : (
                <S.AuthLogout onClick={setLogout}>Logout</S.AuthLogout>
              )}
            </S.Tab>
          </S.Inner>
        </S.Container>
        <S.Backdrop onClick={close} />
      </>
    </NotDesktop>
  );
}

export default Sidebar;
