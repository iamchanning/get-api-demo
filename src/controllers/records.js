const RecordService = require('../services/records')

const recordsController = async (req, res, next) => {
  try {
    const service = new RecordService()
    const records = await service.getAllRecords()
    return res.status(200).send(records)
  } catch (error) {
    // could use an error handle middleware next(error)
    return res.status(500)
  }
}

module.exports = recordsController
