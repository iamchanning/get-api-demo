const supertest = require('supertest')

let app
let request
describe('endpoints', () => {
  beforeAll(() => {
    app = require('../../src/app')
    request = supertest(app)
  })

  afterAll(() => app.close())

  test('/v1/registrations', async () => {
    const response = await request.get('/v1/registrations')
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('registrations')

    const registrations = response.body.registrations;
    expect(registrations.length).toBe(4)
    expect(registrations[0]).toHaveProperty('plate_number')
    expect(registrations[0]).toHaveProperty('registration')
    expect(registrations[0]).toHaveProperty('vehicle')
    expect(registrations[0]).toHaveProperty('insurer')
  })
})
