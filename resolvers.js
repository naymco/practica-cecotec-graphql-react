import bcrypt from 'bcrypt';
import auth from './auth';
import { isAuthenticatedResolver } from './permissions';


const formatErrors = (error, otherErrors) => {
    const errors = error.errors;
    let errores = [];
    if (errors) {
        Object.entries(errors).map(error => {
            const {
                path,
                message
            } = error[1];
            errores.push({
                path,
                message
            });
        });
        errores = errores.concat(otherErrors);
        return errores;
    } else if (otherErrors.length) {
        return otherErrors;
    }

    const uknownError = {}
    switch (error.code) {
        case 11000:
            uknownError.path = 'email';
            uknownError.message = 'El email ya existe prueba con otro, por favor';
            break;
        default:
            uknownError.path = 'Error desconocido'
            uknownError.message = error.message
    }
    return [uknownError]
}

export default {
    Query: {
        allUsers: isAuthenticatedResolver.createResolver(
            async (parent, args, { models }) => {
                const user  = await models.Users.find()
                return user;
            }
            
        ),
        getUser: isAuthenticatedResolver.createResolver(
            async (parent, args, { models }) => {
                const onlyUser = await models.Users.findOne(args);
                return onlyUser;
            }
        ),
        
        allProducts: isAuthenticatedResolver.createResolver(
            async (parent, args, { models }) => {
                const products = await models.Products.find();
                return products;
            }
        )
    },
    Mutation: {
        login: async (parent, {email,password}, {models: {Users},SECRET}) => auth.login(email, password, Users, SECRET),
        createUser: async (parent, {password,...args}, {models}) => {
            const otherErrors = [];
            try {
                if (password.length < 8) {
                    otherErrors.push({
                        path: 'password',
                        message: 'El password debe contener mínimo 8 caracteres.'
                    });
                }
                if (otherErrors.length) {
                    throw otherErrors;
                }

                const hashPassword = await bcrypt.hash(password, 10)
                const user = await models.Users.create({ ...args, password: hashPassword });

                return {
                    info: user,
                    success: true,
                    errors: []
                };
                
            } catch (error) {

                return {
                    success: false,
                    errors: formatErrors(error, otherErrors)
                }
            }
        },
        createProduct: async (parent, args, {
            models
        }) => {
            // console.log(args);
            const product = await models.Products.create(args);

            return product;
        },
    }
}