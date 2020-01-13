'use strict';
const Location = require('../models/location');
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    location_id: DataTypes.INT,
  }, {});
  Room.associate = function(models) {
    // associations can be defined here
    Room.belongsTo(Location, {
      foreignKey: 'id',
      targetKey: 'locationId'
    });
  };
  return Room;
};