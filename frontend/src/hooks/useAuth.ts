import adminState from '@libs/store/adminState';
import loginState from '@libs/store/login';
import presidentStore from '@libs/store/presidentStore';
import useGetUserInfo from '@query/get/useGetUserInfo';
import Authorization from '@utils/Authorization';
import { useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

function useAuth() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [isAdmin, setIsAdmin] = useRecoilState(adminState);
  const [isPresident, setIsPresident] = useRecoilState(presidentStore);
  const resetAdminState = useResetRecoilState(adminState);
  const resetPresidentState = useResetRecoilState(presidentStore);

  const { userinfo, fetchUserInfo } = useGetUserInfo();

  // 로그인 상태에서만 유저정보 호출, 로그인 상태가 아니면 초기값으로
  useEffect(() => {
    if (isLogin) {
      fetchUserInfo();
    } else {
      resetAdminState();
      resetPresidentState();
    }
  }, [fetchUserInfo, isLogin, resetAdminState, resetPresidentState]);

  // 회장, 운영진 이상일 경우 어드민 상태 활성화, 회장일 때는 회장상태 활성화
  useEffect(() => {
    if (userinfo !== undefined) {
      setIsAdmin(Authorization.isMoreThanExecutive(userinfo.grade));
      setIsPresident(Authorization.isPresident(userinfo.grade));
    }
  }, [setIsAdmin, userinfo, setIsPresident]);

  return {
    isLogin,
    isAdmin,
    isPresident,
    setIsLogin,
    setIsAdmin,
  };
}

export default useAuth;
