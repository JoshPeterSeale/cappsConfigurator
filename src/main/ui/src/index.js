import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider}  from 'react-redux';
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import { ApolloClient, InMemoryCache, createHttpLink,  ApolloProvider, gql, from } from "@apollo/client";
import {onError} from "@apollo/client/link/error";

const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers)
const store = configureStore({reducer: reducer})

const errorLink = onError(({graphqlErrors, networkErrors}) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  createHttpLink({
    uri: "http://localhost:8080/graphql",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080/graphql',
    },
    fetch,
  })
])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
