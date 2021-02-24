const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        user(id:ID!): User!
        users:[User]!
    }

    type User {
        id: ID!,
        name: String!
        lastname: String
        email:String
    }
`;

module.exports = typeDefs;