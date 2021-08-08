'use strict';

const faker = require('faker')

let random_data = []

for (let i = 0; i < 10; i++) {
  random_data[i] = {
    fullname: faker.name.findName(),
    age: Math.floor(Math.random() * 60),
    phone: Math.random() * 10 > 3 ? faker.phone.phoneNumber() : null,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clients', random_data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {})
  }
};
