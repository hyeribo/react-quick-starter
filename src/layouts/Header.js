import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const HeaderLayout = () => {
  return (
    <Header className='header'>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['home']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key='home'><Link to='/'>HOME</Link></Menu.Item>
        <Menu.Item key='about'><Link to='/about'>ABOUT</Link></Menu.Item>
        <Menu.Item key='users'><Link to='/users'>USERS</Link></Menu.Item>
      </Menu>
    </Header>
  )
}

export default HeaderLayout;