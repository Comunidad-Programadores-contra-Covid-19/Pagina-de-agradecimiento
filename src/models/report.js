'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    details: DataTypes.STRING
  }, {
    freezeTableName: true ,
  });
  Report.associate = function(models) {
    Report.belongsTo(models.Post);
    Report.belongsTo(models.Reason);
  };
  return Report;
};