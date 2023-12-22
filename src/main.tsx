import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'normalize.css';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { AppRoutes } from './router/Router.tsx';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/', 
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <AppRoutes />
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>
)
