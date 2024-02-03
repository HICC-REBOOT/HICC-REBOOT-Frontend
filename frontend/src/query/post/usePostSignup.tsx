import { QUERY_KEYS } from '@constants/keys';
import ROUTE from '@constants/route';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ['post-signup'],
    mutationFn: writeSignup,
    onSuccess: () => {
      //   queryClient.invalidateQueries({
      //     queryKey: [QUERY_KEYS.PAGEABLE, { uri: '/api/register/sign-up' }],
      //   });
      console.log('회원가입 성공');
      alert('회원가입이 완료되었습니다.');
      // 등록이 완료되면 홈으로 이동
      navigate(`${ROUTE.HOME}`);
    },
    onError: () => {
      console.log('회원가입 실패');
    },
  });

  return {
    writeSignup: mutate,
    isPending,
  };
}

export default usePostSignup;
