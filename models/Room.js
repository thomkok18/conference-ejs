const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Location = require('../models/Location');

const room = sequelize.define('rooms', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    room_id: {
        references: {
            // This is a reference to another model
            model: Location,

            // This is the column name of the referenced model
            key: 'id'
        }
    },
});

module.exports = room;