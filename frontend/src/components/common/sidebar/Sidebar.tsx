import React, { useEffect, useState } from 'react';
import { NotDesktop } from '@assets/mediaQuery';
import { Variants } from 'framer-motion';
import Close from '@assets/image/icon/close.svg';
import ROUTE from '@constants/route';
import { useNavigate } from 'react-router-dom';
import useAuth from '@hooks/useAuth';
import theme from '@styles/theme';
import usePostLogout from '@query/post/usePostLogout';
import * as S from './Sidebar.style';
import GradientButton from '../button/color/GradientButton';
import GradientButtonBlack from '../button/black/GradientButtonBlack';

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

  const { isLogin, isAdmin } = useAuth();
  const { logout } = usePostLogout();
  const navigate = useNavigate();

  const isLoginAndAdmin = isLogin && isAdmin;
  const isLoginButNotAdmin = isLogin && !isAdmin;
  const isNotLogin = !isLogin;

  useEffect(() => {
    setHeight(isLoginAndAdmin ? '39.5rem' : '34rem');
  }, [isLoginAndAdmin]);

  const goLogin = () => {
    navigate(ROUTE.LOGIN);
  };

  const goSignup = () => {
    navigate(ROUTE.SIGNUP);
  };

  const signupStyle: React.CSSProperties = {
    width: '100%',
    height: '4.6rem',
    margin: '0.4rem 1.6rem',
    background: theme.colors.black,
    backdropFilter: 'blur(0.2rem)',
    justifyContent: 'center',
  };

  const authStyle: React.CSSProperties = {
    width: '100%',
    height: '4.6rem',
    margin: '0.4rem 1.6rem',
    justifyContent: 'center',
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
                <GradientButton type="button" onClick={goSignup} style={signupStyle}>
                  <p>Join HICC</p>
                </GradientButton>
              </S.Tab>
            )}
            <S.Tab>
              {isNotLogin ? (
                <GradientButtonBlack type="button" onClick={goLogin} style={authStyle}>
                  <p>Log in</p>
                </GradientButtonBlack>
              ) : (
                <GradientButtonBlack type="button" onClick={() => logout()} style={authStyle}>
                  <p>Log out</p>
                </GradientButtonBlack>
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
