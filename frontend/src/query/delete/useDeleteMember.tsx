import { QUERY_KEYS } from '@constants/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '@utils/request';

interface UseDeleteMemberProps {
  id: number;
}

function useDeleteMember({ id }: UseDeleteMemberProps) {
  const deleteMember = async () => {
    await request<null, null, null>({
      uri: `/api/admin/president/members/${id}`,
      method: 'delete',
    });

    return true;
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['delete-member', id],
    mutationFn: deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PAGEABLE, { uri: '/api/admin/members' }],
      });
      alert(`회원을 추방시켰습니다.`);
    },
  });

  return {
    deleteMember: mutate,
    isDeletePending: isPending,
  };
}

export default useDeleteMember;
