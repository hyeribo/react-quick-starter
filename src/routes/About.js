import React from 'react';
import styled from 'styled-components';

import Breadcrumb from '@components/Breadcrumb';

const About = () => {
  return (
    <Container>
      <Breadcrumb items={['About']} />
      <div>
        소개페이지
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export default About;