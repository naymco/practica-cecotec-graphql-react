export default `
   
    type Query{
        allProducts: [Products]!
        allUsers: [Users]!
        getUser(_id: ID!): Users!
      }

    type Users{
        _id: ID!
        avatar: String
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        products: [Products]
    }

    type Products{
        _id: ID!
        productName: String!
        description: String!
        image: String
        price: Int!
    }

    type Error{
        path: String!,
        message: String!
    }

    type Response {
        info: Users
        success: Boolean!
        token:  String
        errors: [Error]
    }

    type Mutation{
        login( email: String!, password: String!) : Response!
        createUser(
            avatar: String,
            firstName: String!,
            lastName: String!,
            email: String!,
            password: String!
        ): Response!

        createProduct(
            productName: String!,
            description: String!,
            image: String,
            price: Int!
        ) : Products!
    }
`;