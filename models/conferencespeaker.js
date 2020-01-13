'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConferenceSpeaker = sequelize.define('ConferenceSpeaker', {
    conferenceId: DataTypes.INTEGER,
    speakerId: DataTypes.INTEGER
  }, {});
  ConferenceSpeaker.associate = function(models) {
    // associations can be defined here
  };
  return ConferenceSpeaker;
};