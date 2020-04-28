'use strict';
module.exports = (Sequelize, DataTypes) => {
  const Tweet = Sequelize.define('Tweet', {
    id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
    idFromTwitter: {type: DataTypes.STRING},
    tweetLikes: {type: DataTypes.INTEGER},
    tweetLink: {type: DataTypes.STRING},
    tweetDate: {type: DataTypes.DATE}
  }, {
    freezeTableName: true,
  });
  Tweet.associate = function(models) {
    Tweet.hasOne(models.Post);
  };
  return Tweet;
};