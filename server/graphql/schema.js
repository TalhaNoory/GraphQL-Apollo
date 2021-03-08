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
        product: [Product]
    }

    type Product {
        id: String
        producerId: String
        title: String
        type: String
        image: String
        category: String
        unit: String
        unitSize: Int
        bulkUnit: String
        bulkSize: Int
        price: Float
    }
`;

module.exports = typeDefs;
