const {Sequelize, Model, DataTypes} = require('sequelize');
const db = require('../src/config/database');

// const Post = require('../models/post');
// const Reason = require('../models/reason')

const Report = db.define('report', {
    timestamp: {type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW},
    details: {type:Sequelize.STRING, allowNull: true,}
})

// Report.belongsTo(Post, {as: 'post', foreignKey: 'id'});
// Report.hasOne(Reason, {as: Reason, foreignKey: 'id'});

module.exports = Report;
