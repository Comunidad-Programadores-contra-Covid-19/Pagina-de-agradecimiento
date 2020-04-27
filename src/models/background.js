'use strict';
module.exports = (Sequelize, DataTypes) => {
  const Background = Sequelize.define('Background', {
    id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
  	colors: {type: DataTypes.STRING, allowNull: true}
  }, {
    freezeTableName: true,
  });
  Background.associate = function(models) {
    Background.hasOne(models.Post);
  };
  return Background;
};