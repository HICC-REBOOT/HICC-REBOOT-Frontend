import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface UseDeleteApprovalProps {
  approvalId: number;
}

function useDeleteApproval({ approvalId }: UseDeleteApprovalProps) {
  const deleteApproval = async () => {
    await request<null, null, null>({
      uri: `/api/admin/applicants/${approvalId}`,
      method: 'delete',
    });

    return true;
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['delete-approval', approvalId],
    mutationFn: deleteApproval,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PAGEABLE, { uri: '/api/admin/applicants' }],
      });

      alert(`승인이 거절되었습니다.`);
    },
  });

  return {
    deleteApproval: mutate,
    isDeletePending: isPending,
  };
}

export default useDeleteApproval;
