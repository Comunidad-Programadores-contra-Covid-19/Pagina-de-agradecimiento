'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reason = sequelize.define('Reason', {
    name: DataTypes.TEXT
  }, {
    freezeTableName: true,
  });
  Reason.associate = function(models) {
    // associations can be defined here
    // Reason.belongsTo(models.Report, {as: 'report', foreignKey: 'id'});
  };
  return Reason;
};