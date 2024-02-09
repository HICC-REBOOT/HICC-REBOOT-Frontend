import { QUERY_KEYS } from '@constants/keys';
import { useMutation } from '@tanstack/react-query';
import request from '@utils/request';
import { useNavigate } from 'react-router-dom';

export interface ChangePasswordRequest {
  nonce: string;
  password: string;
}

interface ChangePasswordRequestBody {
  password: string;
}

function usePatchChangePassword() {
  const requestChangePassword = async (data: ChangePasswordRequest) => {
    await request<ChangePasswordRequestBody, null, null>({
      uri: `/api/auth/password/verify/${data.nonce}`,
      method: 'patch',
      data: {
        password: data.password,
      },
    });
  };

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.PATCH_CHANGE_PASSWORD],
    mutationFn: requestChangePassword,
    onSuccess: () => {
      alert('성공적으로 비밀번호가 변경되었습니다.');
      navigate('/');
    },
  });

  return {
    changePassword: mutate,
    isPending,
  };
}

export default usePatchChangePassword;
