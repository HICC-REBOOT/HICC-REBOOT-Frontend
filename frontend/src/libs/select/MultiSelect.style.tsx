/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const CustomMenu = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const CustomLeftMenuList = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 15rem;
  padding-left: 4px;
  overflow-x: scroll;
  overflow-x: hidden;

  margin: 4px 0;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d1d4d8;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #d1d4d8;
  }
`;

export const CustomOption = styled.div`
  padding: 4px;
  padding-left: 12px;
  margin-right: 1rem;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
  width: 10rem;
  height: 32px;
  flex-shrink: 0;
  color: var(--grey-900, #212224);
  border-radius: 4px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: var(--grey-300, #eaecee);
  }
  &:active {
    background-color: var(--grey-400, #dcdfe3);
  }
`;

export const Border = styled.div`
  margin-top: 5px;
  border-right: 0.1rem solid var(--grey-400, #dcdfe3);
`;

export const multiSelectStyle = {
  indicatorSeparator: () => ({
    backgroundColor: 'transparent',
  }),
  valueContainer: () => ({
    display: 'flex',
    paddingLeft: '1rem',
  }),
  placeholder: () => ({
    color: 'var(--grey-600, #adb3ba)',
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontWeight: '500',
    border: state.isFocused
      ? ' 1px solid #ff7710'
      : '1px solid var(--grey-400, #DCDFE3)',
    width: '10rem',
    borderRadius: '6px',
    boxShadow: '0 0 0 0px transparent',
    '&:hover': {
      borderColor: '#ff7710',
      border: '1px solid #ff7710',
    },
  }),

  menu: (provided: any) => ({
    ...provided,
    borderRadius: '6px',
    boxShadow: '0 0 0 0px transparent',
    border: '1px solid var(--grey-400, #DCDFE3)',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40rem',
  }),

  menuList: (provided: any) => ({
    ...provided,
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: 'transparent',
    maxHeight: '15rem',
    width: '100%',
    '::-webkit-scrollbar': {
      width: '4px',
    },
    '::-webkit-scrollbar-track': {
      marginTop: '4px',
      borderRadius: '3px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#D1D4D8',
      borderRadius: '3px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#D1D4D8',
    },
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    marginLeft: '0.3rem',
    padding: '0.5rem',
    paddingLeft: '1rem',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontWeight: '500',
    width: '8rem',
    height: '40px',
    color: 'var(--grey-900, #212224)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: state.isFocused
      ? 'var(--grey-300, #EAECEE)'
      : state.isSelected
        ? 'var(--grey-300, #EAECEE)'
        : provided.backgroundColor,
    '&:active': {
      backgroundColor: 'var(--grey-400, #DCDFE3)',
    },
  }),
};
