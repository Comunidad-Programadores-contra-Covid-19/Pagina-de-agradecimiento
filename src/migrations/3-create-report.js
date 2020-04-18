'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Report', {
      id: {allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
      timestamp: {type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW},
      details: {type:Sequelize.STRING, allowNull: true,},
      post: {type: Sequelize.INTEGER, allowNull: true, references: {model:'Post', key:'id'}},
      reason: {allowNull: false, type: Sequelize.INTEGER, references: {model: 'Reason', key: 'id'}},
      createdAt: {allowNull: false, type: Sequelize.DATE},
      updatedAt: {allowNull: false, type: Sequelize.DATE}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Report',{});
  }
};