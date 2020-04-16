'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('post', {
        id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primarykey:true},
        text: {type: Sequelize.TEXT, allowNull: false},
        likes: {type: Sequelize.INTEGER, allowNull: false, defaultValue: 0},
        imgPath: {type: Sequelize.STRING, allowNull: true},
        dislikes: {type: Sequelize.INTEGER, allowNull: false, defaultValue: 0},
        originalLink: {type: Sequelize.STRING, allowNull:true},
        author: {type: Sequelize.STRING, allowNull: false, defaultValue: 'Anonimo'},
        shares: Sequelize.INTEGER,
        font: {type: Sequelize.STRING, allowNull:false, defaultValue: ''}, //definir default
        color: {type: Sequelize.STRING, allowNull:false, defaultValue: 'black'},
        isActive: {type: Sequelize.BOOLEAN, allowNull:false, defaultValue: true}, 
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('post');
  }
};
