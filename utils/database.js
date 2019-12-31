const Sequelize = require('sequelize');
const sequelize = new Sequelize('conferenceApp', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    dateStrings: true
});

module.exports = sequelize;