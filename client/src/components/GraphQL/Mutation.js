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