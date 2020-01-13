'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        firstname: 'John',
        inserts: '',
        lastname: 'Doe',
        age: '20',
        birthday: '1998-12-04'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
