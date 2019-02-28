'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                firstName: "Alejandro",
                lastName: "Perez",
                email: "email1@example.com",
                birthday: "2000-12-31",
                sex: "M",
            },
            {
                firstName: "Enzo",
                lastName: "Last Name",
                email: "email2@example.com",
                birthday: "2000-12-31",
                sex: "M",
            },
            {
                firstName: "Frank",
                lastName: "Last Name",
                email: "email3@example.com",
                birthday: "2000-12-31",
                sex: "M",
            },
            {
                firstName: "Vicente",
                lastName: "Last Name",
                email: "email4@example.com",
                birthday: "2000-12-31",
                sex: "M",
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
