'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('share', {
      id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primarykey:true},
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('share');
  }
};
