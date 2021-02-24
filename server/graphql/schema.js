const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        user(id:String!): User!
        users:[User]!
    }

    type User {
        id: String!
        name: String
        role: String
    }
`;

module.exports = typeDefs;