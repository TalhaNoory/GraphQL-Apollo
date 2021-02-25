import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation AddUser(
        $data:UserInput!
    ) {
        addUser(data:$data) {
            id
            name
            role
        }
    }
`;

export const UPDATE_USER = gql`
    mutation UpdateUser(
        $data:UserInput!
    ) {
        updateUser(data:$data) {
            id
            name
            role
        }
    }
`;