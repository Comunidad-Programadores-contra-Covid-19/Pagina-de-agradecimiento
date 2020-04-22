'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Post_Tag', {
      id: {allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},

      postId: {allowNull: false, type: Sequelize.INTEGER, references: {model: 'Post', key: 'id'}},
      tagId: {allowNull: false, type: Sequelize.INTEGER, references: {model: 'Tag', key: 'id'}},

      createdAt: {allowNull: false, type: Sequelize.DATE},
      updatedAt: {allowNull: false, type: Sequelize.DATE}
  });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Post_Tag', {});
  }
};
