'use strict';
const ConferenceSpeaker = require('../models/conferencespeaker');
const Room = require('../models/room');
module.exports = (sequelize, DataTypes) => {
  const Conference = sequelize.define('Conference', {
    title: DataTypes.STRING
  }, {});
  Conference.associate = function(models) {
    // associations can be defined here
    Conference.belongsTo(ConferenceSpeaker, {
      foreignKey: 'id',
      targetKey: 'conferenceId'
    });

    Conference.belongsTo(Room, {
      foreignKey: 'id',
      targetKey: 'roomId'
    });
  };

  return Conference;
};