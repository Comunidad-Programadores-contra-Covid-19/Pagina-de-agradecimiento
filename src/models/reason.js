'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reason = sequelize.define('Reason', {
    name: DataTypes.TEXT
  }, {
    freezeTableName: true,
  });
  Reason.associate = function(models) {
    Reason.hasMany(models.Report, {as: 'Report', foreignKey: 'reasonId'});
  };
  return Reason;
};