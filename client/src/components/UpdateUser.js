import React from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { UPDATE_USER } from './GraphQL/Mutation';

const CreaterUser = () => {

    const [updateUser] = useMutation(UPDATE_USER, {
        onCompleted: (data) => { console.log(`Success... ${data}`) },
        onError: (error) => { console.log(`Something happened... LUL ${error}`) }
    });

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            role: ''
        },
        onSubmit: values => {
            updateUser({
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
                        name="id"
                        placeholder="Enter new ID..."
                        onChange={formik.handleChange}
                        value={formik.values.id}
                    />
                    <hr />
                    <Form.Control
                        type="String"
                        name="name"
                        placeholder="Enter new name..."
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    <hr />
                    <Form.Control
                        type="String"
                        name="role"
                        placeholder="Enter new title..."
                        onChange={formik.handleChange}
                        value={formik.values.role}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    )
};

export default CreaterUser;
