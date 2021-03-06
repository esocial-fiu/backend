'use strict';
require('dotenv').config();

import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas';
import resolvers from "./resolvers";
import db from '../models';


const app = express();
app.use(cors());


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:{
        db
        
    }
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});