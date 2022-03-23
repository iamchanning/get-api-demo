'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Records.hasOne(models.registrations, {
        foreignKey: 'recordId'
      })
      Records.hasOne(models.vehicles, {
        foreignKey: 'recordId'
      })
      Records.hasOne(models.insurers, {
        foreignKey: 'recordId'
      })
    }
  };
  Records.init({
    plate_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'records'
  })
  return Records
}
