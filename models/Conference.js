'use strict';
const ConferenceSpeaker = require('../models/conferencespeaker');
const ConferenceUser = require('../models/conferenceusers');
const Room = require('../models/room');
module.exports = (sequelize, DataTypes) => {
  const Conference = sequelize.define('Conference', {
    title: DataTypes.STRING
  }, {});
  Conference.associate = function(models) {
    // associations can be defined here
    Conference.belongsTo(models.ConferenceSpeaker, {
      foreignKey: 'id',
      targetKey: 'conferenceId'
    });

    Conference.belongsTo(models.Room);
  };

  return Conference;
};