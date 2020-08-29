"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_ALL_USERS = exports.REGISTER_NEW_USER = void 0;

var _client = require("@apollo/client");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n{\n  allUsers {\n    _id\n    firstName\n    lastName\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\nmutation($email: String!, $firstName: String!, $lastName: String!, $avatar: String, $password: String!)\n{\ncreateUser(\n  avatar: $avatar\n  firstName: $firstName\n  lastName: $lastName\n  email: $email\n  password: $password\n) {\n    info {\n      firstName lastName email\n    }\n      success\n      errors{\n        path\n        message\n      }\n  }\n\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var REGISTER_NEW_USER = (0, _client.gql)(_templateObject());
exports.REGISTER_NEW_USER = REGISTER_NEW_USER;
var GET_ALL_USERS = (0, _client.gql)(_templateObject2());
exports.GET_ALL_USERS = GET_ALL_USERS;