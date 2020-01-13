'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    location_id: DataTypes.INT,
  }, {});
  Room.associate = function(models) {
    // associations can be defined here
    Room.belongsTo(models.Location, {
      foreignKey: 'id',
      targetKey: 'RoomId'
    });
  };
  return Room;
};