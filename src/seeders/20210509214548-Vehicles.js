'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('vehicles', [{
      type: 'Wagon',
      make: 'BMW',
      model: 'X4 M40i',
      colour: 'Blue',
      vin: '12389347324',
      tare_weight: 1700,
      gross_mass: null,
      recordId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'Hatch',
      make: 'Toyota',
      model: 'Corolla',
      colour: 'Silver',
      vin: '54646546313',
      tare_weight: 1432,
      gross_mass: 1500,
      recordId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'Sedan',
      make: 'Mercedes',
      model: 'X4 M40i',
      colour: 'Blue',
      vin: '87676676762',
      tare_weight: 1700,
      gross_mass: null,
      recordId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'SUV',
      make: 'Jaguar',
      model: 'F pace',
      colour: 'Green',
      vin: '65465466541',
      tare_weight: 1620,
      gross_mass: null,
      recordId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('vehicles', null, {})
  }
}
