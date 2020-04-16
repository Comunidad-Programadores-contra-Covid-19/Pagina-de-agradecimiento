const {Sequelize, Model, DataTypes} = require('sequelize');
const db = require('../src/config/database');

// const Report = require('../models/report');

const Reason = db.define('reason', {
    name: {type: Sequelize.TEXT, allowNull: false},
})

// Reason.belongsTo(Report, {as: 'report', foreignKey: 'id'});

module.exports = Reason;