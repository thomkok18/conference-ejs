const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const location = sequelize.define('locations', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = location;