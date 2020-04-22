'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    tweetId: DataTypes.INTEGER,
    tweetLikes: DataTypes.INTEGER,
    tweetLink: DataTypes.STRING,
    tweetDate: DataTypes.DATE,
    tweetAuthor: DataTypes.STRING
  }, {});
  Tweet.associate = function(models) {
    Tweet.hasOne(models.Post, {as:'Post', foreignKey:'tweetId'});
  };
  return Tweet;
};