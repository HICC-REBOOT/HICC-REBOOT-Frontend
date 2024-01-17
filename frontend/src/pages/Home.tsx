import React from 'react';
import FirstScreen from '@components/home/FirstScreen';
import NumberTable from '@components/home/NumberTable';
import styled from 'styled-components';
import Activity from '@components/home/Activity';
import ProjectList from '@components/home/ProjectList';

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <FirstScreen />
      <NumberTable />
      <Activity />
      <ProjectList />
    </Container>
  );
}

export default Home;
