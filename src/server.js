require('dotenv').config();

import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/types';
import resolvers from "./graphql/resolvers";

const app = express();
app.use(cors());

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});