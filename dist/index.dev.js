"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _apolloServerExpress = require("apollo-server-express");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

require("dotenv/config");

var _schema = _interopRequireDefault(require("./schema"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _models = _interopRequireDefault(require("./models"));

var _auth = _interopRequireDefault(require("./auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].Promise = global.Promise; // import { makeExecutableSchema } from 'graphql-tools';

var app = (0, _express["default"])();
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}; // middleware para validar token

app.use(_auth["default"].checkHeaders);
var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _schema["default"],
  resolvers: _resolvers["default"],
  context: function context(_ref) {
    var req = _ref.req;
    //  console.log(req._id)
    return {
      models: _models["default"],
      SECRET: process.env.SECRET,
      userId: req._id
    };
  }
});
server.applyMiddleware({
  app: app
}); // bodyParser is needed just for POST.

app.use('/graphql', (0, _cors["default"])(corsOptions), _bodyParser["default"].json());

_mongoose["default"].set('useCreateIndex', true);

_mongoose["default"].connect('mongodb+srv://practicaCecotec:WSxj2rB2fvYeDHDP@cluster0.c3yws.mongodb.net/practica-cecotec?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function () {
  return console.log('conectado a mongodb');
});

app.listen(process.env.PORT, function () {
  return console.log('Running o eso se supone');
}); // mongo local:  mongodb://localhost:27017/practica-cecotec 
// mongodb+srv://practicaCecotec:WSxj2rB2fvYeDHDP@cluster0.c3yws.mongodb.net/practica-cecotec?retryWrites=true&w=majority
// user y pass de mongo atlas
// user: practicaCecotec
// pass: WSxj2rB2fvYeDHDP