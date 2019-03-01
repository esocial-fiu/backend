require('dotenv').config();

import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './graphql/types';
import resolvers from "./graphql/resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ event, context }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
    }),
});

exports.handler = server.createHandler({
    cors: {
        origin: '*',
        credentials: false,
    },
});