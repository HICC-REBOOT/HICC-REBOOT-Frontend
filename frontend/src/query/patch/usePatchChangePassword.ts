import { QUERY_KEYS } from '@constants/keys';
import { useMutation } from '@tanstack/react-query';
import request from '@utils/request';

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

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.PATCH_CHANGE_PASSWORD],
    mutationFn: requestChangePassword,
    onSuccess: () => {},
  });

  return {
    changePassword: mutate,
    isPending,
  };
}

export default usePatchChangePassword;
