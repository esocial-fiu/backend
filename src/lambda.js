require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';
import typeDefs from './GraphQL/Types';
import resolvers from "./GraphQL/Resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

exports.handler = server.createHandler();