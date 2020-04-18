'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DedicatedTo', {
      id: {allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
      emailAddress: {type: Sequelize.STRING, allowNull: false,},
      name: {type: Sequelize.STRING, allowNull: false,},
      post: {allowNull: false, type: Sequelize.INTEGER, references: {model: 'Post', key: 'id'}},
      createdAt: {allowNull: false, type: Sequelize.DATE},
      updatedAt: {allowNull: false, type: Sequelize.DATE}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DedicatedTo',{});
  }
};