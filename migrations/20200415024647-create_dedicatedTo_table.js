'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('dedicatedTo', {
        id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primarykey:true},
        emailAddress: {type: Sequelize.STRING, allowNull: false,},
        name: {type: Sequelize.STRING, allowNull: false,}, 
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('dedicatedTo');
  }
};
