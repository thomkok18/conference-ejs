'use strict';
module.exports = (sequelize, DataTypes) => {
  const Speaker = sequelize.define('Speaker', {
    name: DataTypes.STRING
  }, {});
  Speaker.associate = function(models) {
    // associations can be defined here
    Speaker.belongsTo(models.Company, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    Speaker.belongsTo(models.ConferenceSpeaker, {
      foreignKey: 'id',
      targetKey: 'speakerId'
    });
  };
  return Speaker;
};