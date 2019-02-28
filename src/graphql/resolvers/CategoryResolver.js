import _ from "lodash"
import categories from "./../../data/categories"
import categoryOptions from "../../data/categoryOptions";

export default {
    Query: {
        category(parent, args, context, info) {
            return _.find(categories, {id: args.id});
        },
        categories(parent, args, context, info) {
            return categories;
        },
    },
    Category: {
        categoryOptions(category) {
            return _.filter(categoryOptions, {categoryId: category.id});
        }
    }
}