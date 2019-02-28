import _ from "lodash";
import categoryOptions from "../../data/categoryOptions";
import users from "../../data/users";

export default {
    Query: {
        me() {
            return _.find(users, {id: 1})
        },
    },
    User: {
        categoryOptions(user) {
            return _.filter(categoryOptions, (categoryOption) => { return user.categoryOptions.indexOf(categoryOption.id) > -1 });
        }
    }
}