const db = require('../models')

class RecordRepository {
  constructor () {
    this.db = db
  }

  async findAll () {
    try {
      const data = await this.db.records.findAll({
        attributes: ['plate_number'],
        include: [{
          attributes: ['expired', 'expiry_date'],
          model: this.db.registrations
        }, {
          attributes: ['type', 'make', 'model', 'colour', 'vin', 'tare_weight', 'gross_mass'],
          model: this.db.vehicles
        }, {
          attributes: ['name', 'code'],
          model: this.db.insurers
        }]
      })
      return {
        registrations: data
      }
    } catch (error) {
      console.log(error)
      return {
        registrations: null
      }
    }
  }
}

module.exports = RecordRepository
