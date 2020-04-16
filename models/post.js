const {Sequelize, Model, DataTypes} = require('sequelize');
const db = require('../src/config/database');

// const Tag = require('../models/tag');
// const Report = require('../models/report');
// const DedicatedTo = require('../models/dedicatedTo');
// const Background = require('../models/background');


const Post = db.define('post', {
    text: {type: Sequelize.TEXT, allowNull: false},
    likes: {type: Sequelize.INTEGER, allowNull:false, defaultValue: 0},
    dislikes: {type: Sequelize.INTEGER, allowNull:false, defaultValue: 0},
    imgPath: {type: Sequelize.STRING, allowNull:true,},
    author: {type: Sequelize.STRING, allowNull:false, defaultValue: 'Anonimo'},
    originalLink: {type: Sequelize.STRING, allowNull:true},
    shares: Sequelize.INTEGER,
    font: {type: Sequelize.STRING, allowNull:false, defaultValue: ''}, //definir default
    color: {type: Sequelize.STRING, allowNull:false, defaultValue: 'black'},
    isActive: {type: Sequelize.BOOLEAN, allowNull:false, defaultValue: true},
})

// Post.belongsToMany(Tag, {through: 'post_tag'});
// Post.hasMany(Report, {as: 'reports', foreignKey: 'id'});
// Post.hasMany(DedicatedTo, {as: 'dedicatedsTo', foreignKey: 'id'});
// Post.hasOne(Background, {as: 'background', foreignKey: 'id'});


module.exports = Post;
