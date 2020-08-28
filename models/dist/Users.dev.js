"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongooseValidator = _interopRequireDefault(require("mongoose-validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = _mongoose["default"].Schema({
  avatar: String,
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    validate: (0, _mongooseValidator["default"])({
      validator: 'isEmail',
      message: 'Introduce un email válido, por favor.'
    })
  },
  password: String,
  products: {
    type: [],
    "default": []
  }
});

var userModel = _mongoose["default"].model('user', userSchema);

var _default = userModel;
exports["default"] = _default;