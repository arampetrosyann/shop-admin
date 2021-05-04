import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import "./styles/index.css";
import App from "./App";

const httpLink = new HttpLink({
  uri: "https://shop-yereone.herokuapp.com",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization:
        "Bearer " + localStorage.getItem("authorization") || "",
      locale: "hy_AM",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
