'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('CategoryOptions', [
            {categoryId: 1, name: "Coding"},
            {categoryId: 1, name: "Roller Skating"},
            {categoryId: 2, name: "Soccer"},
            {categoryId: 2, name: "Volley Ball"},
            {categoryId: 3, name: "Mathematics"},
            {categoryId: 3, name: "Programming I"},
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('CategoryOptions', null, {});
    }
};
