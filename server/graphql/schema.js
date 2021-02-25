const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        user(id:String!): User!
        users:[User]!
    }

    type Mutation {
        addUser(data:UserInput!): User!
        updateUser(data:UserInput!): User!
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
