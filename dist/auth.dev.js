"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var auth = {
  getToken: function getToken(_ref, SECRET) {
    var _id = _ref._id;

    var token = _jsonwebtoken["default"].sign({
      _id: _id
    }, SECRET, {
      expiresIn: '5d'
    });

    return token;
  },
  login: function login(email, password, Users, SECRET) {
    var user, isValidPassword, token;
    return regeneratorRuntime.async(function login$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(Users.findOne({
              email: email
            }));

          case 2:
            user = _context.sent;

            if (user) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", {
              success: false,
              errors: [{
                path: 'email',
                message: 'Email o password incorrectos'
              }]
            });

          case 5:
            _context.next = 7;
            return regeneratorRuntime.awrap(_bcrypt["default"].compare(password, user.password));

          case 7:
            isValidPassword = _context.sent;

            if (isValidPassword) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", {
              success: false,
              errors: [{
                path: 'password',
                message: 'Email o password incorrectos'
              }]
            });

          case 10:
            token = auth.getToken(user, SECRET);
            console.log(token);
            return _context.abrupt("return", {
              success: true,
              token: token,
              errors: []
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
var _default = auth;
exports["default"] = _default;