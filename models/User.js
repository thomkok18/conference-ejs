const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const user = sequelize.define('users', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    inserts: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    birthday: {
        type: Sequelize.DATEONLY,
        allowNull: true
    }
});

module.exports = user;