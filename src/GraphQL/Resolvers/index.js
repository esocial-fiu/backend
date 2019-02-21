'use strict';

import { mergeResolvers } from 'merge-graphql-schemas';
import UserResolver from './UserResolver';
import CategoryResolver from './CategoryResolver';

const resolvers = [
    UserResolver,
    CategoryResolver,
];

export default mergeResolvers(resolvers);