'use strict';

import { mergeTypes } from 'merge-graphql-schemas';
import UserType from './UserSchema';
import CategoryType from './CategorySchema';

const types = [
    UserType,
    CategoryType,
];

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
export default mergeTypes(types, { all: true });