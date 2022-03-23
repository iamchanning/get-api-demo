'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('registrations', [{
      expired: false,
      expiry_date: new Date('2021-02-05T23:15:30.000Z'),
      recordId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      expired: true,
      expiry_date: new Date('2020-03-01T23:15:30.000Z'),
      recordId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      expired: false,
      expiry_date: new Date('2020-12-08T23:15:30.000Z'),
      recordId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      expired: false,
      expiry_date: new Date('2021-07-20T23:15:30.000Z'),
      recordId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('registrations', null, {})
  }
}
