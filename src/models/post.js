const config = require('../config/config');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
    text: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    imgPath: DataTypes.STRING,
    author: DataTypes.STRING,
    shares: DataTypes.INTEGER,
    font: DataTypes.STRING,
    color: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,

    backgroundId: DataTypes.INTEGER,
    tweetId: DataTypes.INTEGER

  }, {
    freezeTableName: true,
  });
  Post.associate = function(models) {
    Post.belongsToMany(models.Tag, {as: 'Tag', through: 'Post_Tag', foreignKey: 'postId'});
    Post.hasMany(models.Report, {as: 'Report', foreignKey: 'postId'});
    Post.hasMany(models.DedicatedTo, {as: 'DedicatedTo', foreignKey: 'postId'});
    Post.belongsTo(models.Background,{foreignKey: 'backgroundId'});
    Post.belongsTo(models.Tweet,{foreignKey: 'tweetId'});
  };

  Post.prototype.url = function () {
    return config.domain.concat('/post/', this.id);
  }

  return Post;
};