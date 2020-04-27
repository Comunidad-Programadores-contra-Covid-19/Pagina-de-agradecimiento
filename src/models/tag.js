'use strict';
module.exports = (Sequelize, DataTypes) => {
  const Tag = Sequelize.define('Tag', {
    id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
    name: {type: DataTypes.TEXT, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
  }, {
    freezeTableName: true,
  });
  Tag.associate = function(models) {
    Tag.belongsToMany(models.Post, {as: 'Post', through: 'Post_Tag'});
  };
  return Tag;
};