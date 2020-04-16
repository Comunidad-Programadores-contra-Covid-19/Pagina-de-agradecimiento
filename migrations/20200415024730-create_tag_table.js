'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('tag', {
        id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primarykey:true},
        name: {type: Sequelize.TEXT, allowNull: false},
        description: {type: Sequelize.TEXT, allowNull: false},
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tag');
  }
};
