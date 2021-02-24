import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


import Reducers from './store/reducers/index';
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5000/graphql'
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider
        store={createStoreWithMiddleware(
          Reducers,
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
      >
        <Routes />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

