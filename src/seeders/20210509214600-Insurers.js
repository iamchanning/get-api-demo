'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('insurers', [{
      name: 'Allianz',
      code: 32,
      recordId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'AAMI',
      code: 17,
      recordId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'GIO',
      code: 13,
      recordId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'NRMA',
      code: 27,
      recordId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('insurers', null, {})
  }
}
