import React from 'react';
import FirstScreen from '@components/home/FirstScreen';
import NumberTable from '@components/home/NumberTable';
import styled from 'styled-components';
import Activity from '@components/home/Activity';
import ProjectList from '@components/home/ProjectList';
import RecentNews from '@components/home/RecentNews';
import HongMap from '@components/home/HongMap';

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <FirstScreen />
      <NumberTable />
      <Activity />
      <ProjectList />
      <RecentNews />
      <HongMap />
    </Container>
  );
}

export default Home;
