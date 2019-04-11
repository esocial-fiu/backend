'use strict';

import { mergeResolvers } from 'merge-graphql-schemas';
import UserResolver from './UserResolver';
import CategoryResolver from './CategoryResolver';
import CategoryOptionResolver from './CategoryOptionResolver';
import EventResolver from './EventResolver';

const resolvers = [
    UserResolver,
    CategoryResolver,
    CategoryOptionResolver,
    EventResolver,
];

export default mergeResolvers(resolvers);