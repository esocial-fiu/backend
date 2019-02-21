import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql';

const app = express();
app.use(cors());

const resolvers = {
    Query: {
        me() {
            return {
                id: 12,
                firstName: "ale",
                lastName: "ale",
                email: "email",
                birthday: "birthday",
                sex: "M",
            };
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});