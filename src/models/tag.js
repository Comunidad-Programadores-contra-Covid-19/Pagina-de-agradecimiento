'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    freezeTableName: true,
  });
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsToMany(models.Post, {through: 'Post_Tag'});
  };
  return Tag;
};