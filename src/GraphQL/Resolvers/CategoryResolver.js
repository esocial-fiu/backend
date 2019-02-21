import _ from "lodash"

const categories = [
    {id: 1, name: "Hobbies"},
    {id: 2, name: "Sports"},
    {id: 3, name: "School Subjects"},
];

export default {
    Query: {
        category(parent, args, context, info) {
            return _.find(categories, (category) => { return category.id == args.id});
        },
        categories(parent, args, context, info) {
            return categories;
        },
    }
}