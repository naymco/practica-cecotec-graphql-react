import express from 'express';
import bodyParser from 'body-parser';
import {
    ApolloServer
} from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';
import "dotenv/config";

mongoose.Promise = global.Promise;
// import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';
import auth from './auth';

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};


// middleware para validar token
app.use(auth.checkHeaders);


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:  ({req}) =>{
        //  console.log(req._id)
        return { 
                models,
                SECRET: process.env.SECRET,
                userId: req._id
            }   
        }
    });
    
    
server.applyMiddleware({ app });

// bodyParser is needed just for POST.
app.use('/graphql', cors(corsOptions), bodyParser.json());

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://practicaCecotec:WSxj2rB2fvYeDHDP@cluster0.c3yws.mongodb.net/practica-cecotec?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('conectado a mongodb'));

app.listen(process.env.PORT, () => console.log('Running o eso se supone'));

// mongo local:  mongodb://localhost:27017/practica-cecotec 
// mongodb+srv://practicaCecotec:WSxj2rB2fvYeDHDP@cluster0.c3yws.mongodb.net/practica-cecotec?retryWrites=true&w=majority

// user y pass de mongo atlas
// user: practicaCecotec
// pass: WSxj2rB2fvYeDHDP