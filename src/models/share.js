'use strict';
module.exports = (Sequelize, DataTypes) => {
  const Share = Sequelize.define('Share', {
    id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
  	init: {type: DataTypes.STRING},
  }, {
    freezeTableName: true,
  });
  Share.associate = function(models) {
    // associations can be defined here
  };
  return Share;
};