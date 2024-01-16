import React from 'react';
import FirstScreen from '@components/home/FirstScreen';
import NumberTable from '@components/home/NumberTable';
import styled from 'styled-components';
import Activity from '@components/home/Activity';

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <FirstScreen />
      <NumberTable />
      <Activity />
    </Container>
  );
}

export default Home;
