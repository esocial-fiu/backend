require('dotenv').config();

import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './graphql/types';
import resolvers from "./graphql/resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

exports.handler = server.createHandler();