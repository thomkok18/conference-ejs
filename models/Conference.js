const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const conference = sequelize.define('conferences', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    company: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    size: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dateStart: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dateEnd: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = conference;