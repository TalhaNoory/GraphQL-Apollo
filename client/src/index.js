import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5000/graphql'
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

