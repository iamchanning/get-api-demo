const RecordRepository = require('../repositories/records')

class recordService {
  constructor () {
    this.recordRepository = new RecordRepository()
  }

  async getAllRecords () {
    return this.recordRepository.findAll()
  }
}

module.exports = recordService
