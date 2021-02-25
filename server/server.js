const { ApolloServer } = require('apollo-server');

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({ 
    typeDefs, resolvers, cors:true
 });


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});