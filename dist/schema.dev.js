"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n   \n    type Query{\n        allProducts: [Products]!\n        allUsers: [Users]!\n        getUser(_id: ID!): Users!\n      }\n\n    type Users{\n        _id: ID!\n        avatar: String\n        firstName: String!\n        lastName: String!\n        email: String!\n        password: String!\n        products: [Products]\n    }\n\n    type Products{\n        _id: ID!\n        productName: String!\n        description: String!\n        image: String\n        price: Int!\n    }\n\n    type Error{\n        path: String!,\n        message: String!\n    }\n\n    type Response {\n        info: Users\n        success: Boolean!\n        token:  String\n        errors: [Error]\n    }\n\n    type Mutation{\n        login( email: String!, password: String!) : Response!\n        createUser(\n            avatar: String,\n            firstName: String!,\n            lastName: String!,\n            email: String!,\n            password: String!\n        ): Response!\n\n        createProduct(\n            productName: String!,\n            description: String!,\n            image: String,\n            price: Int!\n        ) : Products!\n    }\n";
exports["default"] = _default;