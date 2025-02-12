import React, { useEffect, useState } from 'react';
import useGetBoardList from '@query/get/useGetBoardList';
import { Board } from '@components/type/CommonType';
import usePostBoard from '@query/post/usePostBoard';
import usePatchBoard from '@query/patch/usePatchBoard';
import useDeleteBoard from '@query/delete/useDeleteBoard';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@constants/keys';
import * as B from './CommunityAdmin.style';
import BoardItem from './BoardItem';

export type ClientStateBoard = Board & {
  state: 'update' | 'delete' | 'create' | 'none';
};

export default function CommunityAdmin() {
  const { boardList } = useGetBoardList();
  const { postBoard } = usePostBoard();
  const { patchBoard } = usePatchBoard();
  const { deleteBoard } = useDeleteBoard();

  // const boardList = [
  //   { boardType: '자유게시판', boardTypeId: 1 },
  //   { boardType: '게시판', boardTypeId: 2 },
  // ];

  const [addMode, setAddMode] = useState(false);
  const buttonText = addMode ? '완료' : '추가';

  const [boardState, setBoardState] = useState<ClientStateBoard[]>([]);

  useEffect(() => {
    setBoardState(boardList.map((board) => ({ ...board, state: 'none' })));
  }, [boardList]);

  const getServerStateBoard = (boardTypeId: number) => {
    return boardList.filter((server) => server.boardTypeId === boardTypeId)[0];
  };

  const handleUpdate = (board: ClientStateBoard) => {
    setBoardState((prev) =>
      prev.map((b) => {
        if (b.boardTypeId === board.boardTypeId) {
          if (board.state === 'create') {
            return {
              ...b,
              boardType: board.boardType,
              state: 'create',
            };
          }

          const serverBoard = getServerStateBoard(board.boardTypeId);
          const isSameAsServer = serverBoard.boardType === board.boardType;

          return {
            ...b,
            boardType: board.boardType,
            state: isSameAsServer ? 'none' : 'update',
          };
        }
        return b;
      }),
    );
  };

  const handleDelete = (board: ClientStateBoard) => {
    setBoardState((prev) => prev.map((b) => (b.boardTypeId === board.boardTypeId ? { ...b, state: 'delete' } : b)));
  };

  const [newBoardType, setNewBoardType] = useState('');

  const handleAdd = () => {
    if (addMode) {
      const isAlreadyExist = boardState.find((board) => board.boardType === newBoardType) !== undefined;

      if (isAlreadyExist) {
        alert('이미 등록된 게시판입니다.');
        return;
      }

      const newBoard: ClientStateBoard = {
        boardType: newBoardType,
        boardTypeId: Math.floor(Math.random() * -99999999) - 1, // 난수
        state: 'create',
      };

      setBoardState((prev) => [...prev, newBoard]);
      setNewBoardType('');
    }
    setAddMode((prev) => !prev);
  };

  const queryClient = useQueryClient();

  const onSubmit = async () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const board of boardState) {
      if (board.state === 'create') {
        await postBoard({ name: board.boardType });
      } else if (board.state === 'update') {
        await patchBoard({ name: board.boardType, id: board.boardTypeId });
      } else if (board.state === 'delete') {
        await deleteBoard({ id: board.boardTypeId });
      }
    }

    alert('게시판이 수정되었습니다.');
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_BOARD_LIST] });
  };

  const notChanged = boardState.every((board) => board.state === 'none');

  return (
    <B.Container>
      <B.BoardListContainer>
        {boardState
          .filter((board) => board.state !== 'delete')
          .map((board) => (
            <BoardItem key={board.boardTypeId} {...board} handleUpdate={handleUpdate} handleDelete={handleDelete} />
          ))}
        {addMode && (
          <B.BoardStyle>
            <B.BoardInput value={newBoardType} onChange={(event) => setNewBoardType(event.target.value)} />
          </B.BoardStyle>
        )}
      </B.BoardListContainer>
      <B.Buttons>
        <B.AddButton onClick={handleAdd}>{buttonText}</B.AddButton>
        <B.ActionButton onClick={onSubmit} disabled={notChanged}>
          수정완료
        </B.ActionButton>
      </B.Buttons>
    </B.Container>
  );
}
