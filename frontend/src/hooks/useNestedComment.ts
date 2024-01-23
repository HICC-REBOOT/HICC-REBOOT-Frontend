import nestedCommentStore from '@libs/store/nestedCommentState';
import { useRecoilState } from 'recoil';

interface ReturnUseNestedComment {
  nestedId: number | null;
  selectedNested: (id: number) => void;
  outsideClick: () => void;
}

function useNestedComment(): ReturnUseNestedComment {
  const [nestedId, setNestedId] = useRecoilState(nestedCommentStore);

  const selectedNested = (id: number) => {
    setNestedId(id);
  };

  const outsideClick = () => {
    setNestedId(null);
  };

  return {
    nestedId,
    selectedNested,
    outsideClick,
  };
}

export default useNestedComment;
