'use strict';
module.exports = (Sequelize, DataTypes) => {
    const Requester = Sequelize.define('Requester', {
        ip: {allowNull: false, type: DataTypes.STRING},
        lastRequest: {type: DataTypes.DATE, allowNull: false, defaultValue: new Date()},
    }, {
        freezeTableName: true ,
    });
    Requester.associate = function(models) {};
    return Requester;
};