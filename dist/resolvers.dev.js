"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
    createUser: function createUser(parent, args, _ref4) {
      var models, user;
      return regeneratorRuntime.async(function createUser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              models = _ref4.models;
              console.log(args);
              _context4.next = 4;
              return regeneratorRuntime.awrap(models.Users.create(args));

            case 4:
              user = _context4.sent;
              return _context4.abrupt("return", user);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      });
    },
    createProduct: function createProduct(parent, args, _ref5) {
      var models, product;
      return regeneratorRuntime.async(function createProduct$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              models = _ref5.models;
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