import React from 'react';
import styled from 'styled-components';

import Breadcrumb from '@components/Breadcrumb';

const Home = () => {
  return (
    <Container>
      <Breadcrumb items={['Home']} />
      <div>
        홈
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export default Home;