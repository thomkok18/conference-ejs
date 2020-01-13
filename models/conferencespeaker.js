'use strict';
const Conference = require('../models/conference');
const Speaker = require('../models/speaker');
module.exports = (sequelize, DataTypes) => {
  const ConferenceSpeaker = sequelize.define('ConferenceSpeaker', {
    conferenceId: DataTypes.INT,
    speakerId: DataTypes.INT
  }, {});
  ConferenceSpeaker.associate = function(models) {
    // associations can be defined here
    ConferenceSpeaker.hasMany(Conference, {
      foreignKey: 'id',
      sourceKey: 'conferenceId'
    });
    ConferenceSpeaker.hasMany(Speaker, {
      foreignKey: 'id',
      sourceKey: 'speakerId'
    });
  };
  return ConferenceSpeaker;
};