import loginState from '@libs/store/login';
import { useRecoilState } from 'recoil';

function useAuth() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  return {
    isLogin,
    setIsLogin,
  };
}

export default useAuth;
