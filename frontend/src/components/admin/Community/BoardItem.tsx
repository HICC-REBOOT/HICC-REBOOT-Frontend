import React, { useState } from 'react';
import Buttons from '@components/common/buttons/Buttons';
import * as B from './CommunityAdmin.style';
import { ClientStateBoard } from './CommunityAdmin';

type BoardProps = ClientStateBoard & {
  handleUpdate: (board: ClientStateBoard) => void;
  handleDelete: (board: ClientStateBoard) => void;
};

const BoardItem = ({ handleDelete, handleUpdate, ...board }: BoardProps) => {
  const [editMode, setEditMode] = useState(false);

  const changeEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const buttonText = editMode ? '확인' : '수정';

  const onClickChange = () => {
    changeEditMode();
  };

  return (
    <B.BoardStyle>
      <B.BoardInput
        value={board.boardType}
        onChange={(event) => handleUpdate({ ...board, boardType: event.target.value })}
        disabled={!editMode}
      />
      <B.Buttons>
        <Buttons
          normal={{ label: buttonText, onClick: onClickChange, show: board.boardType !== '전체게시판' }}
          dangerous={{ label: '삭제', onClick: () => handleDelete(board), show: board.boardType !== '전체게시판' }}
        />
      </B.Buttons>
    </B.BoardStyle>
  );
};

export default BoardItem;
