

export default {
    Query: {
        allUsers: async (parent, args, {models}) => {
            const users = await models.Users.find();
            console.log(args);
            return users;
        },
        getUser: async (parent, args, {models}) => {
            const onlyUser = await models.Users.findOne(args);
            console.log(onlyUser);
            return onlyUser;
        },
        allProducts: async (parent, args, {models})=>{
            const products = await models.Products.find();

            return products;
        }
    },
    Mutation: {
        createUser: async (parent, args, { models }) => {
            console.log(args);
           const user = await models.Users.create(args);

           return user;
        },
        createProduct: async (parent, args, {models}) =>{
            console.log(args);
            const product = await models.Products.create(args);

            return product;
        },
        // updateUser: async (parent, args, { models }) =>{
        //     const upUser = await models.Users.update(args);

        //     return upUser;
        // }
    }
}