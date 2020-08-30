"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv/config");

var _models = _interopRequireDefault(require("./models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var auth = {
  checkHeaders: function checkHeaders(req, res, next) {
    var token, _jwt$verify, _id, newToken;

    return regeneratorRuntime.async(function checkHeaders$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(req.headers["x-token"]);

          case 2:
            token = _context.sent;

            if (!token) {
              _context.next = 16;
              break;
            }

            _context.prev = 4;
            _jwt$verify = _jsonwebtoken["default"].verify(token, process.env.SECRET), _id = _jwt$verify._id;
            req._id = _id; //    console.log(req._id)

            _context.next = 16;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](4);
            _context.next = 13;
            return regeneratorRuntime.awrap(auth.checkToken(token));

          case 13:
            newToken = _context.sent;
            // console.log(newToken)
            req._id = newToken.user;

            if (newToken.token) {
              res.set("Access-Control-Expose-Headers", "x-token");
              res.set("x-token", newToken.token);
            }

          case 16:
            next();

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[4, 9]]);
  },
  checkToken: function checkToken(token) {
    var userId, _ref, _id, user, _auth$getToken, _auth$getToken2, newToken;

    return regeneratorRuntime.async(function checkToken$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userId = null; // console.log("userId", userId)

            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_jsonwebtoken["default"].decode(token));

          case 4:
            _ref = _context2.sent;
            _id = _ref._id;
            userId = _id;
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", {});

          case 12:
            _context2.next = 14;
            return regeneratorRuntime.awrap(_models["default"].Users.findOne({
              _id: userId
            }));

          case 14:
            user = _context2.sent;
            //  console.log("User", user)
            _auth$getToken = auth.getToken(user), _auth$getToken2 = _slicedToArray(_auth$getToken, 1), newToken = _auth$getToken2[0];
            return _context2.abrupt("return", {
              user: user._id,
              token: newToken
            });

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 9]]);
  },
  getToken: function getToken(_ref2) {
    var _id = _ref2._id;

    var newToken = _jsonwebtoken["default"].sign({
      _id: _id
    }, process.env.SECRET, {
      expiresIn: "5d"
    }); // console.log(newToken)


    return [newToken];
  },
  login: function login(email, password, Users) {
    var user, isValidPassword, _auth$getToken3, _auth$getToken4, newToken;

    return regeneratorRuntime.async(function login$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(Users.findOne({
              email: email
            }));

          case 2:
            user = _context3.sent;

            if (user) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", {
              success: false,
              errors: [{
                path: "email",
                message: "Email o password incorrectos"
              }]
            });

          case 5:
            _context3.next = 7;
            return regeneratorRuntime.awrap(_bcrypt["default"].compare(password, user.password));

          case 7:
            isValidPassword = _context3.sent;

            if (isValidPassword) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", {
              success: false,
              errors: [{
                path: "password",
                message: "Email o password incorrectos"
              }]
            });

          case 10:
            _auth$getToken3 = auth.getToken(user), _auth$getToken4 = _slicedToArray(_auth$getToken3, 1), newToken = _auth$getToken4[0];
            return _context3.abrupt("return", {
              success: true,
              token: newToken,
              errors: []
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};
var _default = auth;
exports["default"] = _default;