import _ from "lodash"
import categories from "./../../data/categories"
import categoryOptions from "./../../data/categoryOptions"

export default {
    Query: {
        categoryOption(parent, args, context, info) {
            return _.find(categoryOptions, {id: args.id});
        },
        categoryOptions(parent, args, context, info) {
            return _.filter(categoryOptions, {categoryId: args.categoryId});
        },
    },
    CategoryOption: {
        category(categoryOption) {
            return _.find(categories, {id: categoryOption.categoryId});
        }
    }
}