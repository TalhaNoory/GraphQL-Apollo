import React from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { gql, useMutation, useQuery } from '@apollo/client';

const ADD_POST = gql`
  mutation AddPost(
    $data:PostInput!
  ) {
    addPost(data:$data) {
      id
      title
      body
      author {
        name
      }
    }
  }
`;

const GET_LAST_POST = gql`
  query {
    lastPost {
      id
      title
      body
    }
  }
`;


const Posts = () => {

  const [addPost] = useMutation(ADD_POST, {
    onCompleted: (data) => { console.log(`Success... ${data}`) },
    onError: (error) => { console.log(`Something happened... LUL ${error}`) },
    //This will let all the promises get resolved, when done, we get it back!
    //Use when using mulitple queries!
    awaitRefetchQueries:true,
    refetchQueries: [{
      query: GET_LAST_POST
    }]
  });

  const getLastPost = useQuery(GET_LAST_POST)

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      author: ''
    },
    onSubmit: values => {
      addPost({
        variables: {
          data: { ...values }
        }
      })
    }
  });

  return (
    <div>

      <Form onSubmit={formik.handleSubmit}>

        <Form.Group>
          <Form.Control
            type="String"
            name="title"
            placeholder="Enter title..."
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <hr />
          <Form.Control
            type="String"
            name="body"
            placeholder="Enter title..."
            onChange={formik.handleChange}
            value={formik.values.body}
          />
          <hr />
          <Form.Control
            type="String"
            name="author"
            placeholder="Enter title..."
            onChange={formik.handleChange}
            value={formik.values.author}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>

      <h3>The last post is: </h3>
      { getLastPost && getLastPost.data ?
        <div>
          <div><b>Title: {getLastPost.data.lastPost.title}</b></div>
          <div><b>Body: {getLastPost.data.lastPost.body}</b></div>
        </div>
        : null}
    </div>
  );
};

export default Posts;
