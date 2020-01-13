'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsTo(models.User, {
      foreignKey: 'id',
      targetKey: 'roleId'
    });
  };
  return Role;
};