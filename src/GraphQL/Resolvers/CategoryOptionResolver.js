import _ from "lodash"
import categories from "./../../Data/categories"
import categoryOptions from "./../../Data/categoryOptions"

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
            return _.find(categoryOptions, {id: categoryOption.categoryId});
        }
    }
}