import React from 'react';
import styled from 'styled-components';

import Breadcrumb from '@components/Breadcrumb';

const UserDetail = ({match}) => {
  return (
    <Container>
      <Breadcrumb items={['유저 상세정보', match.params.userName ]} />
      <div>
        <Row>
          <Title>id: </Title>
          <span>{ match.params.userId }</span>  
        </Row>
        <Row>
          <Title>name: </Title>
          <span>{ match.params.userName }</span>  
        </Row>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Row = styled.div`
  padding: 5px 15px;
`;
const Title = styled.span`
  font-weight: bold;
`;

export default UserDetail;