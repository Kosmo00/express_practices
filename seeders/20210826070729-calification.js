'use strict';

const data = [
    {
        name: 'DREADFUL',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'BAD',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'MEDIUM',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'GOOD',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'GREAT',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Califications', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Califications', null, {})
    }
};
