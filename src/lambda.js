'use strict';
require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas';
import resolvers from "./resolvers";
import db from '../models';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ event, context }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
        db
    }),
});

exports.handler = server.createHandler({
    cors: {
        origin: '*',
        credentials: false,
    },
});