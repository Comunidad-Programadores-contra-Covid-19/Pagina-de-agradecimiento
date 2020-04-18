'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    timestamp: DataTypes.DATE,
    details: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  Report.associate = function(models) {
    // associations can be defined here
    Report.belongsTo(models.Post, {as: 'post', foreignKey: 'id'});
    Report.hasOne(models.Reason, {as: 'reason', foreignKey: 'id'});
  };
  return Report;
};