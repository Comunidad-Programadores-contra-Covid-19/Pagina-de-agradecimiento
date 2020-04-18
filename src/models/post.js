'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    text: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER,
    imgPath: DataTypes.STRING,
    author: DataTypes.STRING,
    originalLink: DataTypes.STRING,
    shares: DataTypes.INTEGER,
    font: DataTypes.STRING,
    color: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    freezeTableName: true,
  });
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsToMany(models.Tag, {as: 'tags', through: 'Post_Tag'});
    Post.hasMany(models.Report, {as: 'reports', foreignKey: 'id'});
    Post.hasMany(models.DedicatedTo, {as: 'dedicatedsTo', foreignKey: 'id'});
    Post.hasOne(models.Background, {as: 'background', foreignKey: 'id'});
  };
  return Post;
};