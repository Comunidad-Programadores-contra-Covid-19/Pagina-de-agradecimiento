'use strict';
module.exports = (Sequelize, DataTypes) => {
  const Report = Sequelize.define('Report', {
    id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
    details: {type:DataTypes.STRING, allowNull: true,},

  }, {
    freezeTableName: true ,
  });
  Report.associate = function(models) {
    Report.belongsTo(models.Post);
    Report.belongsTo(models.Reason);
  };
  return Report;
};