'use strict';
module.exports = (sequelize, DataTypes) => {
  const Background = sequelize.define('Background', {
    imgPath: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  Background.associate = function(models) {
    // associations can be defined here
    // Background.belongsTo(models.Post, {as: 'post', foreignKey: 'id'});
  };
  return Background;
};