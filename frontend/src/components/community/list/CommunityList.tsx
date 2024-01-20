import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CurrentBoardContext from '../CurrentBoardContext';
import Filter from './filter/Filter';

function CommunityList() {
  const { currentBoard } = useOutletContext<CurrentBoardContext>();

  return (
    <>
      <Filter />
    </>
  );
}

export default CommunityList;
