'use strict';

const faker = require('faker/locale/es')

let data = []

for (let i = 0; i < 3; i++) {
    data[i] = {
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        message: faker.hacker.phrase(),
        calification_id: Math.floor(Math.random() * 4) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
    }
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Messages', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Messages', null, {})
    }
};
