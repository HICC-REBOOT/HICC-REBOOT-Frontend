import { Board } from '@components/community/CommunityType';
import { QUERY_KEYS } from '@constants/keys';
import ROUTE from '@constants/route';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';
import { useNavigate } from 'react-router-dom';

interface UsePatchApprovalProps {
  approvalId: number;
}

// interface UpdateApproval {}

function usePatchApproval({ approvalId }: UsePatchApprovalProps) {
  const updateApproval = async () => {
    await request<null, null, null>({
      uri: `/api/admin/applicants/${approvalId}`,
      method: 'patch',
    });

    return true;
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ['update-approval', approvalId],
    mutationFn: updateApproval,
    onSuccess: () => {
      alert(`승인이 완료되었습니다.`);
    },
  });

  return {
    updateApproval: mutate,
    isPending,
  };
}

export default usePatchApproval;
