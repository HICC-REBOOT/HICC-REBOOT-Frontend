import adminState from '@libs/store/adminState';
import loginState from '@libs/store/login';
import useGetUserInfo from '@query/get/useGetUserInfo';
import isMoreThanExecutive from '@utils/isMoreThanExecutive';
import { useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

function useAuth() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [isAdmin, setIsAdmin] = useRecoilState(adminState);
  const resetAdminState = useResetRecoilState(adminState);

  const { userinfo, fetchUserInfo } = useGetUserInfo();

  // 로그인 상태에서만 유저정보 호출, 로그인 상태가 아니면 초기값으로
  useEffect(() => {
    if (isLogin) {
      fetchUserInfo();
    } else {
      resetAdminState();
    }
  }, [fetchUserInfo, isLogin, resetAdminState]);

  // 회장, 운영진 이상일 경우 어드민 상태 활성화
  useEffect(() => {
    if (userinfo !== undefined) {
      setIsAdmin(isMoreThanExecutive(userinfo.grade));
    }
  }, [setIsAdmin, userinfo]);

  return {
    isLogin,
    isAdmin,
    setIsLogin,
    setIsAdmin,
  };
}

export default useAuth;
