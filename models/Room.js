'use strict';
const Location = require('../models/location');
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    location_id: DataTypes.INTEGER,
  }, {});
  Room.associate = function(models) {
    // associations can be defined here
    Room.belongsTo(models.Location);
  };
  return Room;
};