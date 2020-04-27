'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tweet', {
      id: {allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},

      tweetId: {type: Sequelize.STRING},
      tweetLikes: {type: Sequelize.INTEGER},
      tweetLink: {type: Sequelize.STRING},
      tweetDate: {type: Sequelize.DATE}

      createdAt: {allowNull: false, type: Sequelize.DATE},
      updatedAt: {allowNull: false, type: Sequelize.DATE}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tweet',{});
  }
};