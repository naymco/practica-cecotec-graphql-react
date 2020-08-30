"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_ALL_PRODUCTS = exports.GET_ALL_USERS = exports.LOGIN_WITH_TOKEN = exports.CREATE_NEW_PRODUCT = exports.REGISTER_NEW_USER = void 0;

var _client = require("@apollo/client");

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  {\n    allProducts {\n      _id\n      image\n      productName\n      description\n      price\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  {\n    allUsers {\n      _id\n      avatar\n      firstName\n      lastName\n      email\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation($email: String!, $password: String!){\n   login(\n     email: $email\n     password: $password\n   ){\n    success\n    token\n    errors{\n      path\n      message\n    }\n   }\n  }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n  mutation($productName: String!, $description: String!, $image: String, $price: String! )\n  {\n    createProduct(\n      productName: $productName\n      description: $description\n      image: $image\n      price: $price\n    ){\n      _id\n      productName\n      description\n      image\n      price\n    }\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  mutation($email: String!, $firstName: String!, $lastName: String!, $avatar: String, $password: String!)\n  {\n  createUser(\n    avatar: $avatar\n    firstName: $firstName\n    lastName: $lastName\n    email: $email\n    password: $password\n  ) {\n      info {\n       _id avatar firstName lastName email\n      }\n        success\n        errors{\n          path\n          message\n        }\n    }\n\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var REGISTER_NEW_USER = (0, _client.gql)(_templateObject());
exports.REGISTER_NEW_USER = REGISTER_NEW_USER;
var CREATE_NEW_PRODUCT = (0, _client.gql)(_templateObject2());
exports.CREATE_NEW_PRODUCT = CREATE_NEW_PRODUCT;
var LOGIN_WITH_TOKEN = (0, _client.gql)(_templateObject3());
exports.LOGIN_WITH_TOKEN = LOGIN_WITH_TOKEN;
var GET_ALL_USERS = (0, _client.gql)(_templateObject4());
exports.GET_ALL_USERS = GET_ALL_USERS;
var GET_ALL_PRODUCTS = (0, _client.gql)(_templateObject5());
exports.GET_ALL_PRODUCTS = GET_ALL_PRODUCTS;