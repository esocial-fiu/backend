import _ from "lodash";
import categoryOptions from "../../data/categoryOptions";
import users from "../../data/users";

export default {
    Query: {
        me() {
            return _.find(users, {id: 1})
        },
        user(parent, args, context, info) {
            return _.find(users, {id: Number(args.id)});
        },
        users() {
            return users;
        },
    },
    Mutation: {
        userLogin(obj, args, context, info) {
            if(args.username !== "admin" || args.password !== "admin")
                return null;

            return _.find(users, {id: 1});
        },
        userRegister(obj, args, context, info) {
            const newUser = {
                id: (_.last(users)).id + 1,
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                birthday: args.birthday,
                sex: args.sex,
                categoryOptions: _.map(args.categoryOptions, (i) => { return Number(i); }),
            };

            users.push(newUser);

            return newUser;
        }
    },
    User: {
        categoryOptions(user) {
            return _.filter(categoryOptions, (categoryOption) => { return user.categoryOptions.indexOf(categoryOption.id) > -1 });
        }
    }
}