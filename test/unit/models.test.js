const database = require('../../src/models');

test('Should have expected models', () => {
  expect(database).toHaveProperty('records')
  expect(database).toHaveProperty('registrations')
  expect(database).toHaveProperty('vehicles')
  expect(database).toHaveProperty('insurers')
})
