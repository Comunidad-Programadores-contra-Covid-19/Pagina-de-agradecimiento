'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('background', {
        id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primarykey:true},
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('background');
  }
};
