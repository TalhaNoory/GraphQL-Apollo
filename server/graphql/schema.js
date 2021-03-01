const { gql } = require("apollo-server");

//https://graphql.org/learn/schema/ (Explanation)

const typeDefs = gql`
    type Query {
        user(id:String!): User!
        users:[User]!
    }

    type Mutation {
        addUser(data:UserInput!): User!
        updateUser(data:UserInput!): User!
        deleteUser(id:String!): Boolean!
    }

    input UserInput {
        id: String!
        name: String
        role: String

    }

    type User {
        id: String!
        name: String
        role: String
    }
`;

module.exports = typeDefs;
