/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import Tab, { TabUnit } from '@components/common/tab/Tab';
import { Outlet, useLocation } from 'react-router-dom';

const items: TabUnit[] = [
  {
    key: 'approval',
    label: '회원 승인',
  },
  {
    key: 'info',
    label: '회원 정보',
  },
  {
    key: 'change',
    label: '등급 수정',
  },
];

function Admin() {
  const location = useLocation();
  const path = location.pathname.split('/')[2] || items[0].key;
  return (
    <Container>
      <Tab items={items} initKey={path} />
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
