'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tweet', {
      id: {allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},

      tweetId: {type: Sequelize.INTEGER},
      tweetLikes: {type: Sequelize.INTEGER},
      tweetLink: {type: Sequelize.STRING},
      tweetDate: {type: Sequelize.DATE},
      tweetAuthor: {type: Sequelize.STRING},

      createdAt: {allowNull: false, type: Sequelize.DATE},
      updatedAt: {allowNull: false, type: Sequelize.DATE}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tweet',{});
  }
};