'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('records', [{
      plate_number: 'EBF28E',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      plate_number: 'CXD82F',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      plate_number: 'WOP29P',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      plate_number: 'QWX55Z',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('records', null, {})
  }
}
