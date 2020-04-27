'use strict';
module.exports = (Sequelize, DataTypes) => {
  const Reason = Sequelize.define('Reason', {
    id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
  	name: {type: DataTypes.TEXT, allowNull: false},
  }, {
    freezeTableName: true,
  });
  Reason.associate = function(models) {
    Reason.hasMany(models.Report);
  };
  return Reason;
};