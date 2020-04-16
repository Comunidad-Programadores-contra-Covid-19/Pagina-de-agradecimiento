const {Sequelize, Model, DataTypes} = require('sequelize');
const db = require('../src/config/database');

// const Post = require('../models/post')

const Tag = db.define('tag', {
    name: {type: Sequelize.TEXT, allowNull: false},
    description: {type: Sequelize.TEXT, allowNull: false},
})

// Tag.belongsToMany(Post, {through: 'post_tag'});


module.exports = Tag;
