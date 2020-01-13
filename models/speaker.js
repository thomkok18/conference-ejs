'use strict';
module.exports = (sequelize, DataTypes) => {
  const Speaker = sequelize.define('Speaker', {
    name: DataTypes.STRING
  }, {});
  Speaker.associate = function(models) {
    // associations can be defined here
    models.Speaker.belongsTo(models.Company, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Speaker;
};