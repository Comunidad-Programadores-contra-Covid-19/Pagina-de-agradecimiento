'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('report', {
        id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primarykey:true},
        timestamp: {type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW},
        details: {type:Sequelize.STRING, allowNull: true,}
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('report');
  }
};
