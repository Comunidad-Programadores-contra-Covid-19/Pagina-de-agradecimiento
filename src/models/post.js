const config = require('../config/config');

'use strict';
module.exports = (Sequelize, DataTypes) => {
  const Post = Sequelize.define('Post', {
    id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},

    text: {type: DataTypes.TEXT, allowNull: false},
    likes: {type: DataTypes.INTEGER, allowNull:false, defaultValue: 0},
    author: {type: DataTypes.STRING, allowNull:false, defaultValue: 'Anonimo'},
    imgPath: {type: DataTypes.STRING, allowNull:true},
    imgWidth: {type: DataTypes.INTEGER, allowNull:true},
    imgHeight: {type: DataTypes.INTEGER, allowNull:true},
    shares: {type: DataTypes.INTEGER, allowNull:false, defaultValue: 0},
    font: {type: DataTypes.STRING, allowNull:false, defaultValue: ''}, //TODO definir default
    color: {type: DataTypes.STRING, allowNull:false, defaultValue: 'black'},
    isActive: {type: DataTypes.BOOLEAN, allowNull:false, defaultValue: true},
  }, {
    freezeTableName: true,
  });
  Post.associate = function(models) {
    Post.belongsToMany(models.Tag, {as: 'Tag', through: 'Post_Tag'});
    Post.hasMany(models.Report);
    Post.hasMany(models.DedicatedTo);
    Post.belongsTo(models.Tweet);
  };

  Post.prototype.url = function () {
    return config.domain.concat('/post/', this.id);
  }

  return Post;
};