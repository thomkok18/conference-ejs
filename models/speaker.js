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
    Speaker.belongsTo(Company, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    Speaker.belongsTo(ConferenceSpeaker, {
      foreignKey: 'id',
      targetKey: 'speakerId'
    });
    Speaker.belongsTo(User, {
      foreignKey: 'id',
      targetKey: 'userId'
    });
    Speaker.belongsTo(Company, {
      foreignKey: 'id',
      targetKey: 'companyId'
    });
  };
  return Speaker;
};