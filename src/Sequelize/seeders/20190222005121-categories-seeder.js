'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categories', [
            {name: "Hobbies"},
            {name: "Sports"},
            {name: "School Subjects"}
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};
