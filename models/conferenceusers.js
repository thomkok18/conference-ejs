'use strict';
const User = require('../models/user');
const Conference = require('../models/conference');
module.exports = (sequelize, DataTypes) => {
  const ConferenceUsers = sequelize.define('ConferenceUsers', {
    name: DataTypes.STRING
  }, {});
  ConferenceUsers.associate = function(models) {
    // associations can be defined here
    ConferenceUsers.hasMany(User, {
      foreignKey: 'id',
      sourceKey: 'userId'
    });
    ConferenceUsers.hasMany(Conference, {
      foreignKey: 'id',
      sourceKey: 'conferenceId'
    });
  };
  return ConferenceUsers;
};