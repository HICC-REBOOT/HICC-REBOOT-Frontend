/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { Tabs, ConfigProvider } from 'antd';
import type { TabsProps } from 'antd';
import theme from '@styles/theme';
import Approval from '@components/admin/Approval';
import MemberInfo from '@components/admin/MemberInfo';
import ChangeGrade from '@components/admin/ChangeGrade';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '회원 승인',
    children: <Approval />,
  },
  {
    key: '2',
    label: '회원 정보',
    children: <MemberInfo />,
  },
  {
    key: '3',
    label: '등급 수정',
    children: <ChangeGrade />,
  },
];

function Admin() {
  return (
    <Container>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              itemColor: theme.colors.white,
              horizontalItemGutter: 110,
            },
          },
        }}
      >
        <CustomTabs defaultActiveKey="1" items={items} onChange={onChange} animated={{ inkBar: true, tabPane: true }} />
      </ConfigProvider>
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

const CustomTabs = styled(Tabs)`
  color: ${theme.colors.white};
`;
