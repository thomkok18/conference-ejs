'use strict';
const User = require('../models/user');
const Company = require('../models/company');
const ConferenceSpeaker = require('../models/conferencespeaker');
module.exports = (sequelize, DataTypes) => {
  const Speaker = sequelize.define('Speaker', {
    name: DataTypes.STRING
  }, {});
  Speaker.associate = function(models) {
    // associations can be defined here
    Speaker.belongsTo(models.Company);
    Speaker.belongsTo(models.ConferenceSpeaker, {
      foreignKey: 'id',
      targetKey: 'speakerId'
    });
    Speaker.belongsTo(models.User);
    Speaker.belongsTo(models.Company);
  };
  return Speaker;
};