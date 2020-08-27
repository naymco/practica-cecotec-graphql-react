import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Routes from './routes';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});


ReactDOM.render(
 <ApolloProvider client={client}>
    <React.StrictMode>
    <Routes />
  </React.StrictMode>
 </ApolloProvider>,
  document.getElementById('root')
);
