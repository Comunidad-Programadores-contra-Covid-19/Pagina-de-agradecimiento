'use strict';
module.exports = (sequelize, DataTypes) => {
  const DedicatedTo = sequelize.define('DedicatedTo', {
    emailAddress: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  DedicatedTo.associate = function(models) {
    // associations can be defined here
    DedicatedTo.belongsTo(models.Post);
  };
  return DedicatedTo;
};