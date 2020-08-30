"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _auth = _interopRequireDefault(require("./auth"));

var _permissions = require("./permissions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var formatErrors = function formatErrors(error, otherErrors) {
  var errors = error.errors;
  var errores = [];

  if (errors) {
    Object.entries(errors).map(function (error) {
      var _error$ = error[1],
          path = _error$.path,
          message = _error$.message;
      errores.push({
        path: path,
        message: message
      });
    });
    errores = errores.concat(otherErrors);
    return errores;
  } else if (otherErrors.length) {
    return otherErrors;
  }

  var uknownError = {};

  switch (error.code) {
    case 11000:
      uknownError.path = 'email';
      uknownError.message = 'El email ya existe prueba con otro, por favor';
      break;

    default:
      uknownError.path = 'Error desconocido';
      uknownError.message = error.message;
  }

  return [uknownError];
};

var _default = {
  Query: {
    allUsers: _permissions.isAuthenticatedResolver.createResolver(function _callee(parent, args, _ref) {
      var models, user;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              models = _ref.models;
              _context.next = 3;
              return regeneratorRuntime.awrap(models.Users.find());

            case 3:
              user = _context.sent;
              return _context.abrupt("return", user);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }),
    getUser: _permissions.isAuthenticatedResolver.createResolver(function _callee2(parent, args, _ref2) {
      var models, onlyUser;
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              models = _ref2.models;
              _context2.next = 3;
              return regeneratorRuntime.awrap(models.Users.findOne(args));

            case 3:
              onlyUser = _context2.sent;
              return _context2.abrupt("return", onlyUser);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    }),
    allProducts: _permissions.isAuthenticatedResolver.createResolver(function _callee3(parent, args, _ref3) {
      var models, products;
      return regeneratorRuntime.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              models = _ref3.models;
              _context3.next = 3;
              return regeneratorRuntime.awrap(models.Products.find());

            case 3:
              products = _context3.sent;
              return _context3.abrupt("return", products);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    })
  },
  Mutation: {
    login: function login(parent, _ref4, _ref5) {
      var email, password, Users, SECRET;
      return regeneratorRuntime.async(function login$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              email = _ref4.email, password = _ref4.password;
              Users = _ref5.models.Users, SECRET = _ref5.SECRET;
              return _context4.abrupt("return", _auth["default"].login(email, password, Users, SECRET));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      });
    },
    createUser: function createUser(parent, _ref6, _ref7) {
      var password, args, models, otherErrors, hashPassword, user;
      return regeneratorRuntime.async(function createUser$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              password = _ref6.password, args = _objectWithoutProperties(_ref6, ["password"]);
              models = _ref7.models;
              otherErrors = [];
              _context5.prev = 3;

              if (password.length < 8) {
                otherErrors.push({
                  path: 'password',
                  message: 'El password debe contener mínimo 8 caracteres.'
                });
              }

              if (!otherErrors.length) {
                _context5.next = 7;
                break;
              }

              throw otherErrors;

            case 7:
              _context5.next = 9;
              return regeneratorRuntime.awrap(_bcrypt["default"].hash(password, 10));

            case 9:
              hashPassword = _context5.sent;
              _context5.next = 12;
              return regeneratorRuntime.awrap(models.Users.create(_objectSpread({}, args, {
                password: hashPassword
              })));

            case 12:
              user = _context5.sent;
              return _context5.abrupt("return", {
                info: user,
                success: true,
                errors: []
              });

            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](3);
              return _context5.abrupt("return", {
                success: false,
                errors: formatErrors(_context5.t0, otherErrors)
              });

            case 19:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[3, 16]]);
    },
    createProduct: function createProduct(parent, args, _ref8) {
      var models, product;
      return regeneratorRuntime.async(function createProduct$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              models = _ref8.models;
              _context6.next = 3;
              return regeneratorRuntime.awrap(models.Products.create(args));

            case 3:
              product = _context6.sent;
              return _context6.abrupt("return", product);

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;