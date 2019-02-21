'use strict';

import { mergeResolvers } from 'merge-graphql-schemas';
import UserResolver from './UserResolver';
import CategoryResolver from './CategoryResolver';
import CategoryOptionResolver from './CategoryOptionResolver';

const resolvers = [
    UserResolver,
    CategoryResolver,
    CategoryOptionResolver,
];

export default mergeResolvers(resolvers);