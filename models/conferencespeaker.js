'use strict';
const Conference = require('../models/conference');
const Speaker = require('../models/speaker');
module.exports = (sequelize, DataTypes) => {
  const ConferenceSpeaker = sequelize.define('ConferenceSpeaker', {
    conferenceId: DataTypes.INTEGER,
    speakerId: DataTypes.INTEGER
  }, {});
  ConferenceSpeaker.associate = function(models) {
    // associations can be defined here
    ConferenceSpeaker.hasMany(models.Conference, {
      foreignKey: 'id',
      sourceKey: 'conferenceId'
    });
    ConferenceSpeaker.hasMany(models.Speaker, {
      foreignKey: 'id',
      sourceKey: 'speakerId'
    });
  };
  return ConferenceSpeaker;
};