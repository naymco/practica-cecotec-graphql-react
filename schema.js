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

    type Mutation{
        createUser(
            avatar: String,
            firstName: String!,
            lastName: String!,
            email: String!,
            password: String!
        ): Boolean!

        createProduct(
            productName: String!,
            description: String!,
            image: String,
            price: Int!
        ) : Products!
    }
`;