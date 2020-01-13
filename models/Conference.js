'use strict';
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
  };
  return Conference;
};