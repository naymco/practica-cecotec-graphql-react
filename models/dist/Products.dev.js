"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productSchema = _mongoose["default"].Schema({
  productName: String,
  description: String,
  image: String,
  price: String
});

var productModel = _mongoose["default"].model('product', productSchema);

var _default = productModel;
exports["default"] = _default;