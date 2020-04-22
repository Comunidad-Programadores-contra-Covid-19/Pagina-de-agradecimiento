'use strict';
module.exports = (sequelize, DataTypes) => {
  const Background = sequelize.define('Background', {
    imgPath: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  Background.associate = function(models) {
    Background.hasMany(models.Post, {as: 'Post', foreignKey: 'backgroundId'});
  };
  return Background;
};