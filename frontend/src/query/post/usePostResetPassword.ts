import { QUERY_KEYS } from '@constants/keys';
import { useMutation } from '@tanstack/react-query';
import request from '@utils/request';

export interface ResetPasswordRequest {
  sid: string;
  email: string;
}

interface ResetPasswordRequestBody {
  email: string;
}

function usePostResetPassword() {
  const requestResetPassword = async (data: ResetPasswordRequest) => {
    await request<ResetPasswordRequestBody, null, null>({
      uri: `/api/auth/password/${data.sid}`,
      method: 'post',
      data: {
        email: data.email,
      },
    });
  };

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.POST_RESET_PASSWORD],
    mutationFn: requestResetPassword,
    onSuccess: () => {
      alert('이메일을 확인하세요.');
    },
  });

  return {
    resetPassword: mutate,
    isPending,
  };
}

export default usePostResetPassword;
