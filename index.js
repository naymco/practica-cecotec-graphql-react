import express from 'express';
import bodyParser from 'body-parser';
import {
    ApolloServer,
    gql
} from 'apollo-server-express';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
// import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

const PORT = 3000;

const SECRET = 'estoesunsecretomuysecreto';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers, 
    context: {
        models,
        SECRET
    }
});
server.applyMiddleware({
    app
});

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json());

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/practica-cecotec', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('conectado a mongodb'));

app.listen(PORT, () => console.log('Running o eso se supone'));