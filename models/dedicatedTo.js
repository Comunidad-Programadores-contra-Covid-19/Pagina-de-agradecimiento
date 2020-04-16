const {Sequelize, Model, DataTypes} = require('sequelize');
const db = require('../src/config/database');


const DedicatedTo = db.define('dedicatedTo', {
    emailAddress: {type: Sequelize.STRING, allowNull: false,},
    name: {type: Sequelize.STRING, allowNull: false,},
})

// DedicatedTo.belongsTo(Post, {as: 'post', foreignKey: 'id'})

module.exports = DedicatedTo

