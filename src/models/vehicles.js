'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Vehicles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Vehicles.belongsTo(models.records, {
        foreignKey: 'recordId'
      })
    }
  };
  Vehicles.init({
    type: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    colour: DataTypes.STRING,
    vin: DataTypes.STRING,
    tare_weight: DataTypes.INTEGER,
    gross_mass: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vehicles'
  })
  return Vehicles
}
