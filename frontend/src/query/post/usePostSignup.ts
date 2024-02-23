import { QUERY_KEYS } from '@constants/keys';
import ROUTE from '@constants/route';
import { useMutation } from '@tanstack/react-query';
import request from '@utils/request';
import { useNavigate } from 'react-router-dom';

interface WriteSignupRequestBody {
  studentNumber: string;
  password: string;
  name: string;
  department: string;
  phoneNumber: string;
  email: string;
}

function usePostSignup() {
  const writeSignup = async (data: WriteSignupRequestBody) => {
    await request<WriteSignupRequestBody, null, null>({
      uri: '/api/auth/sign-up',
      method: 'post',
      data,
    });

    return true;
  };

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.POST_SIGNUP],
    mutationFn: writeSignup,
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
      // 등록이 완료되면 홈으로 이동
      navigate(`${ROUTE.LOGIN}`);
    },
    onError: (error) => {
      if (error.message === 'Request failed with status code 409') {
        alert('아이디(학번)이 중복되었습니다. 다시 확인해주세요');
      } else {
        alert('다시 시도해주세요.');
      }
    },
  });

  return {
    writeSignup: mutate,
    isPending,
  };
}

export default usePostSignup;
