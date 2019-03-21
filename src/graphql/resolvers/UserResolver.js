import _ from "lodash";
import categoryOptions from "../../data/categoryOptions";
import users from "../../data/users";

export default {
    Query: {
        me() {
            return _.find(users, {id: 1})
        },
    },
    Mutation: {
        userLogin(obj, args, context, info) {
            if(args.username !== "admin" || args.password !== "admin")
                return null;

            return _.find(users, {id: 1});
        }
    },
    User: {
        categoryOptions(user) {
            return _.filter(categoryOptions, (categoryOption) => { return user.categoryOptions.indexOf(categoryOption.id) > -1 });
        }
    }
}