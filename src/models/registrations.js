'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Registrations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Registrations.belongsTo(models.records, {
        foreignKey: 'recordId'
      })
    }
  };
  Registrations.init({
    expired: DataTypes.BOOLEAN,
    expiry_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'registrations'
  })
  return Registrations
}
