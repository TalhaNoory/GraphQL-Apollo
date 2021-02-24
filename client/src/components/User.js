import React, { useState } from 'react';
import { Card, CardGroup, Form, Button } from 'react-bootstrap';

import { useQuery, useLazyQuery } from '@apollo/client';
import {GET_ALL_USERS, GET_USER_BY_ID} from './GraphQL/Queries'

const User = () => {
  const [user, setUser] = useState('');
  const getUsers = useQuery(GET_ALL_USERS);
  const [userGetLazy, userGetLazyResult] = useLazyQuery(GET_USER_BY_ID);

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
  )

  const handleSubmit = (event) => {
    //Block the form from submitting & reloading the page
    event.preventDefault();
    userGetLazy({
      variables: {
        id: user
      }
    })
  };

  return (
    <div className="App">
      <h3>All Users</h3>
      <CardGroup>
        {allUsersHandler()}
      </CardGroup>
      <div>
      <hr/>
        <h3>Get user by id: </h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter user id..."
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        {userGetLazyResult.data ?
          <div className="m-3">
            <div>ID: {userGetLazyResult.data.user.id}</div>
            <div>Name: {userGetLazyResult.data.user.name}</div>
            <div>Lastname: {userGetLazyResult.data.user.role}</div>
          </div>
          : null
        }
      </div>
    </div>
  );
};

export default User;
