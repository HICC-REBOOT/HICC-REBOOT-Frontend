import React from 'react';
import FirstScreen from '@components/home/FirstScreen';
import NumberTable from '@components/home/NumberTable';
import Activity from '@components/home/Activity';
import styled from 'styled-components';

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <FirstScreen />
      <NumberTable />
    </Container>
  );
}

export default Home;
