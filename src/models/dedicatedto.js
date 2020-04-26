'use strict';
module.exports = (Sequelize, DataTypes) => {
  const DedicatedTo = Sequelize.define('DedicatedTo', {
    //id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
    emailAddress: {type: DataTypes.STRING, allowNull: false,},
    name: {type: DataTypes.STRING, allowNull: false,}
  }, {
    freezeTableName: true,
  });
  DedicatedTo.associate = function(models) {
    // associations can be defined here
    DedicatedTo.belongsTo(models.Post);
  };
  return DedicatedTo;
};