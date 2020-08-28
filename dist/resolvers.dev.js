"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  Query: {
    allUsers: function allUsers(parent, args, _ref) {
      var models, users;
      return regeneratorRuntime.async(function allUsers$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              models = _ref.models;
              _context.next = 3;
              return regeneratorRuntime.awrap(models.Users.find());

            case 3:
              users = _context.sent;
              console.log(args);
              return _context.abrupt("return", users);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    getUser: function getUser(parent, args, _ref2) {
      var models, onlyUser;
      return regeneratorRuntime.async(function getUser$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              models = _ref2.models;
              _context2.next = 3;
              return regeneratorRuntime.awrap(models.Users.findOne(args));

            case 3:
              onlyUser = _context2.sent;
              console.log(onlyUser);
              return _context2.abrupt("return", onlyUser);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    allProducts: function allProducts(parent, args, _ref3) {
      var models, products;
      return regeneratorRuntime.async(function allProducts$(_context3) {
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
    }
  },
  Mutation: {
    createUser: function createUser(parent, _ref4, _ref5) {
      var password, args, models, hashPassword, user;
      return regeneratorRuntime.async(function createUser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              password = _ref4.password, args = _objectWithoutProperties(_ref4, ["password"]);
              models = _ref5.models;
              _context4.prev = 2;
              _context4.next = 5;
              return regeneratorRuntime.awrap(_bcrypt["default"].hash(password, 10));

            case 5:
              hashPassword = _context4.sent;
              _context4.next = 8;
              return regeneratorRuntime.awrap(models.Users.create(_objectSpread({}, args, {
                password: hashPassword
              })));

            case 8:
              user = _context4.sent;
              console.log(user);
              return _context4.abrupt("return", true);

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](2);
              console.log(_context4.t0);
              return _context4.abrupt("return", false);

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[2, 13]]);
    },
    createProduct: function createProduct(parent, args, _ref6) {
      var models, product;
      return regeneratorRuntime.async(function createProduct$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              models = _ref6.models;
              console.log(args);
              _context5.next = 4;
              return regeneratorRuntime.awrap(models.Products.create(args));

            case 4:
              product = _context5.sent;
              return _context5.abrupt("return", product);

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      });
    } // updateUser: async (parent, args, { models }) =>{
    //     const upUser = await models.Users.update(args);
    //     return upUser;
    // }

  }
};
exports["default"] = _default;