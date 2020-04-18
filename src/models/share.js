'use strict';
module.exports = (sequelize, DataTypes) => {
  const Share = sequelize.define('Share', {
    init: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  Share.associate = function(models) {
    // associations can be defined here
  };
  return Share;
};