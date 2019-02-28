'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Events', [
            {
                title: "Study Group",
                description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                location: "FIU Green Library",
                date: "2000-12-31",
                createdBy: 2,
                maxAmountOfPeople: 20,
            },
            {
                title: "Study Group",
                description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                location: "FIU Green Library",
                date: "2000-12-31",
                createdBy: 2,
                maxAmountOfPeople: 20,
            },
            {
                title: "Study Group",
                description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                location: "FIU Green Library",
                date: "2000-12-31",
                createdBy: 3,
                maxAmountOfPeople: 20,
            },
            {
                title: "Study Group",
                description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                location: "FIU Green Library",
                date: "2000-12-31",
                createdBy: 3,
                maxAmountOfPeople: 20,
            },
            {
                title: "Study Group",
                description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                location: "FIU Green Library",
                date: "2000-12-31",
                createdBy: 4,
                maxAmountOfPeople: 20,
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Events', null, {});
    }
};
