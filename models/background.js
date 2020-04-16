const {Sequelize} = require('sequelize');
const db = require('../src/config/database');


const Background = db.define('background', {
    // imgPaths = ,//todo list
})

// Background.belongsTo(Post, {as: 'post', foreignKey: 'id'});

module.exports = Background; 