import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query getUserById($id: String!) {
    user(id: $id) {
      id
      name
      role
    }
  }
`;

export const GET_ALL_USERS = gql`
  query {
    users {
      id
      name
      role
    }
  }
`;
