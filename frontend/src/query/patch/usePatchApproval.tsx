import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface UsePatchApprovalProps {
  approvalId: number;
}

function usePatchApproval({ approvalId }: UsePatchApprovalProps) {
  const updateApproval = async () => {
    await request<null, null, null>({
      uri: `/api/admin/applicants/${approvalId}`,
      method: 'patch',
    });

    return true;
  };
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['update-approval', approvalId],
    mutationFn: updateApproval,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PAGEABLE, { uri: '/api/admin/applicants' }],
      });
      alert(`승인이 완료되었습니다.`);
    },
  });

  return {
    updateApproval: mutate,
    isPending,
  };
}

export default usePatchApproval;
