'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Report', {
      id: {allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},

      details: {type:Sequelize.STRING, allowNull: true,},

      postId: {type: Sequelize.INTEGER, references: {model:'Post', key:'id'}},
      reasonId: {type: Sequelize.INTEGER, references: {model: 'Reason', key: 'id'}},

      createdAt: {allowNull: false, type: Sequelize.DATE},
      updatedAt: {allowNull: false, type: Sequelize.DATE}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Report',{});
  }
};