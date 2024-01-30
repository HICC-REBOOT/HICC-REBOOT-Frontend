import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface UseDeleteMemberProps {
  studentNumber: string;
}

function useDeleteMember({ studentNumber }: UseDeleteMemberProps) {
  const deleteMember = async () => {
    await request<null, null, null>({
      uri: `/api/admin/president/members/${studentNumber}`,
      method: 'delete',
    });

    return true;
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ['delete-member', studentNumber],
    mutationFn: deleteMember,
    onSuccess: () => {
      alert(`회원을 추방시켰습니다.`);
    },
  });

  return {
    deleteMember: mutate,
    isDeletePending: isPending,
  };
}

export default useDeleteMember;
