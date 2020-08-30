"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = require("@apollo/client");

var httpLink = new _client.HttpLink({
  uri: 'http://localhost:3000/graphql'
});
var authMiddleware = new _client.ApolloLink(function (operation, forward) {
  operation.setContext({
    headers: {
      "x-token": localStorage.getItem('token' || null)
    }
  });
  return forward(operation);
});
var authAfterware = new _client.ApolloLink(function (operation, forward) {
  return forward(operation).map(function (response) {
    var context = operation.getContext();
    var headers = context.headers; //   console.log("ope", headers )

    if (headers) {
      var token = headers["x-token"];

      if (token) {
        localStorage.setItem("token", token);
      }
    }

    return response;
  });
});

var _default = new _client.ApolloClient({
  link: authAfterware.concat(authMiddleware.concat(httpLink)),
  cache: new _client.InMemoryCache()
});

exports["default"] = _default;