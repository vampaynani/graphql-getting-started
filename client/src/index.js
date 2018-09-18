import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// With a Promise
client.query({
  query: gql`
  {
    feed{
      description
      url
    }
  }
  `
})
.then(response => console.log(response.data));

// With async/await
const feed = async () => {
  await client.query({
    query: gql`
    {
      feed{
        description
        url
      }
    }
    `
  })
};

console.log(feed);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
, document.getElementById('root'));
registerServiceWorker();
