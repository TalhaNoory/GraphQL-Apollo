import React, { useState } from 'react';
import { Card, CardGroup, Form, Button } from 'react-bootstrap';

import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { GET_ALL_USERS, GET_USER_BY_ID } from './GraphQL/Queries'
import { DELETE_USER_BY_ID } from './GraphQL/Mutation';

const User = () => {
  const [user, setUser] = useState('');
  const getUsers = useQuery(GET_ALL_USERS);
  const [userGetLazy, userGetLazyResult] = useLazyQuery(GET_USER_BY_ID);
  const [deleteUser] = useMutation(DELETE_USER_BY_ID);

  // const { data, loading, error } = useQuery(GET_USER_BY_ID);

  const allUsersHandler = () => (
    getUsers.data ?
      getUsers.data.users.map((user, i) => (
        <Card key={i}>
          <Card.Body>
            <Card.Title>{user.id}</Card.Title>
            <Card.Text>{user.name}</Card.Text>
            <Card.Text>{user.role}</Card.Text>
          </Card.Body>
        </Card>
      ))
      : null
  );

  const handleGetUser = (event) => {
    //Block the form from submitting & reloading the page
    event.preventDefault();
    userGetLazy({
      variables: {
        id: user
      }
    });
  };

  const handleDeleteUser = () => {
    deleteUser({
      variables: {
        id: user
      }
    });
  };

  return (
    <div>
      <h3>All Users</h3>
      <CardGroup>
        {allUsersHandler()}
      </CardGroup>
      <div>
        <hr />
        <h3>GET/DELETE USER ID: </h3>
        <Form onSubmit={handleGetUser}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter user id..."
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Get User</Button>
          <Button type="submit" onClick={handleDeleteUser}>Delete User</Button>
          <Button
            onClick={() => getUsers.refetch()}
          >
            REFETCH!
          </Button>
        </Form>
        <hr />
        {userGetLazyResult.data ?
          <div>
            <div>ID: {userGetLazyResult.data.user.id}</div>
            <div>Name: {userGetLazyResult.data.user.name}</div>
            <div>Lastname: {userGetLazyResult.data.user.role}</div>
          </div>
          : null
        }
      </div>
      <hr />
    </div>
  );
};

export default User;
