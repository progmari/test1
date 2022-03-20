import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, } from '@apollo/client';

import "./index.css";
import App from "./App";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://frontend.challenges.tblx.io/graphql" }),
  cache: new InMemoryCache()
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
  document.getElementById("root")
);
