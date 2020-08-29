"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _apolloServerExpress = require("apollo-server-express");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _schema = _interopRequireDefault(require("./schema"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _models = _interopRequireDefault(require("./models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].Promise = global.Promise; // import { makeExecutableSchema } from 'graphql-tools';

var PORT = 3000;
var SECRET = 'estoesunsecretomuysecreto';
var app = (0, _express["default"])();
var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _schema["default"],
  resolvers: _resolvers["default"],
  context: {
    models: _models["default"],
    SECRET: SECRET
  }
});
server.applyMiddleware({
  app: app
}); // bodyParser is needed just for POST.

app.use('/graphql', _bodyParser["default"].json());

_mongoose["default"].set('useCreateIndex', true);

_mongoose["default"].connect('mongodb://localhost:27017/practica-cecotec', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function () {
  return console.log('conectado a mongodb');
});

app.listen(PORT, function () {
  return console.log('Running o eso se supone');
});