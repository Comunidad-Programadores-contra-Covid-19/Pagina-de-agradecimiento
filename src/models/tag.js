'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    freezeTableName: true,
  });
  Tag.associate = function(models) {
    Tag.belongsToMany(models.Post, {as: 'Post', through: 'Post_Tag', foreignKey: 'tagId'});
  };
  return Tag;
};