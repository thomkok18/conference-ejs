'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConferenceSpeaker = sequelize.define('ConferenceSpeaker', {
    conferenceId: DataTypes.INT,
    speakerId: DataTypes.INT
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