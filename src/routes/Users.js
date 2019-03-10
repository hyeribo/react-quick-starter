import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Breadcrumb from '@components/Breadcrumb';

const UserItem = ({user}) => {
  return (
    <UserItemContainer>
      <Link to={`/user/${user.name}/${user.id}`}>{user.name}</Link>
    </UserItemContainer>
  )
}
const UserList = ({users}) => {
  const userItems = users.map(user => {
    return <UserItem key={user.id} user={user} />
  })
  return (
    <div>
      {userItems}
    </div>
  )
}

const Users = () => {
  const users = [
    { id: 1, name: 'Iron Man' },
    { id: 2, name: 'Captain America' },
    { id: 3, name: 'Thor' },
    { id: 4, name: 'Hulk' },
    { id: 5, name: 'Hawkeye' },
    { id: 6, name: 'Black Widow' },
    { id: 7, name: 'Black Panther' },
  ]
  return (
    <Container>
      <Breadcrumb items={['유저 목록']} />
      <div>
        <UserList users={users} />
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const UserItemContainer = styled.div`
  padding: 10px 15px;
`;
export default Users;