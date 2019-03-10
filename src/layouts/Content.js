import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';
const { Content } = Layout;

import Home from '../routes/Home';
import About from '../routes/About';
import Users from '../routes/Users';
import UserDetail from '../routes/UserDetail';

const ContentLayout = () => {
  return (
    <Content>
      <Container>
        <Route path='/' component={Home} exact></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/users' component={Users}></Route>
        <Route path='/user/:userName/:userId' component={UserDetail}></Route>
      </Container>
    </Content>
  )
}

const Container = styled.div`
  height: calc(100vh - 133px);
  padding: 20px
`;
export default ContentLayout;