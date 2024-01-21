/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import Tab, { TabUnit } from '@components/common/tab/Tab';
import { Outlet } from 'react-router-dom';
import ROUTE from '@constants/route';

const items: TabUnit[] = [
  {
    key: ROUTE.ADMIN.APPROVAL,
    label: '회원 승인',
  },
  {
    key: ROUTE.ADMIN.INFO,
    label: '회원 정보',
  },
  {
    key: ROUTE.ADMIN.CHANGE,
    label: '등급 수정',
  },
];

function Admin() {
  return (
    <Container>
      <Tab items={items} initKey={items[0].key} />
      <Outlet />
    </Container>
  );
}

export default Admin;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  background-color: ${(props) => props.theme.colors.black};
`;
