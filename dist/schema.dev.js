"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n   \n    type Query{\n        allProducts: [Products]!\n        allUsers: [Users]!\n        getUser(_id: ID!): Users!\n      }\n\n    type Users{\n        _id: ID!\n        avatar: String\n        firstName: String!\n        lastName: String!\n        email: String!\n        password: String!\n        products: [Products]\n    }\n\n    type Products{\n        _id: ID!\n        productName: String!\n        description: String!\n        image: String\n        price: Int!\n    }\n\n    type Mutation{\n        createUser(\n            avatar: String,\n            firstName: String!,\n            lastName: String!,\n            email: String!,\n            password: String!\n        ): Boolean!\n\n        createProduct(\n            productName: String!,\n            description: String!,\n            image: String,\n            price: Int!\n        ) : Products!\n    }\n";
exports["default"] = _default;