import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Routes from './routes';

import { ApolloProvider } from '@apollo/client';
import client from './apollo';


ReactDOM.render(
 <ApolloProvider client={client}>
    <React.StrictMode>
    <Routes />
  </React.StrictMode>
 </ApolloProvider>,
  document.getElementById('root')
);
