'use strict';
const User = require('../models/user');
const Conference = require('../models/conference');
module.exports = (sequelize, DataTypes) => {
  const ConferenceUsers = sequelize.define('ConferenceUser', {
    userId: DataTypes.INTEGER,
    conferenceId: DataTypes.INTEGER
  }, {});
  ConferenceUsers.associate = function(models) {
    // associations can be defined here
    ConferenceUsers.hasMany(models.User, {
      foreignKey: 'id',
      sourceKey: 'userId'
    });
    ConferenceUsers.hasMany(models.Conference, {
      foreignKey: 'id',
      sourceKey: 'conferenceId'
    });
  };
  return ConferenceUsers;
};