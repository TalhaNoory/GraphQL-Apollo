import React, { useState } from 'react';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { Card, CardGroup, Form, Button } from 'react-bootstrap';

const GET_USER_BY_ID = gql`
  query getUserById($id:ID!){
    user(id:$id) {
      id
      name
      lastname
      email
    }
  }
`;

const GET_ALL_USERS = gql`
  query {
    users{
      name
      lastname
      email
    }
  }
`;

const Home = () => {
  const [user, setUser] = useState('');
  const getUsers = useQuery(GET_ALL_USERS);
  const [userGetLazy, userGetLazyResult] = useLazyQuery(GET_USER_BY_ID);

  // const { data, loading, error } = useQuery(GET_USER_BY_ID);

  const allUsersHandler = () => (
    getUsers.data ?
      getUsers.data.users.map((user, i) => (
        <Card key={i}>
          <Card.Body>
            <Card.Title>{user.email}</Card.Title>
            <Card.Text>{user.name}</Card.Text>
            <Card.Text>{user.lastname}</Card.Text>
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
            <div>Name: {userGetLazyResult.data.user.name}</div>
            <div>Lastname: {userGetLazyResult.data.user.lastname}</div>
            <div>Email: {userGetLazyResult.data.user.email}</div>
          </div>
          : null
        }
      </div>
      <hr />
      <Button
        onClick={() => getUsers.startPolling(3000)}
      >
        START POLLING!
      </Button>
      <Button
        onClick={() => getUsers.stopPolling()}
      >
        STOP POLLING!
      </Button>
      <Button
        onClick={() => getUsers.refetch()}
      >
        REFETCH!
      </Button>
    </div>
  );
};

export default Home;
