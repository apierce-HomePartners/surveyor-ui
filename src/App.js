import React, { Component } from 'react';
import './App.css';
import Surveyor from './components/Surveyor';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_ENDPOINT_URI,
  headers: {
    authorization: "Bearer " + process.env.REACT_APP_TOKEN,
  },
  fetchOptions: {
    method: "POST",
  },
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Surveyor></Surveyor>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
