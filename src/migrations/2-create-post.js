'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Post', {
      id: {allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
      text: {type: Sequelize.TEXT, allowNull: false},
      likes: {type: Sequelize.INTEGER, allowNull:false, defaultValue: 0},
      dislikes: {type: Sequelize.INTEGER, allowNull:false, defaultValue: 0},
      imgPath: {type: Sequelize.STRING, allowNull:true,},
      author: {type: Sequelize.STRING, allowNull:false, defaultValue: 'Anonimo'},
      originalLink: {type: Sequelize.STRING, allowNull:true},
      shares: {type: Sequelize.INTEGER, allowNull:false, defaultValue: 0},
      font: {type: Sequelize.STRING, allowNull:false, defaultValue: ''}, //TODO definir default
      color: {type: Sequelize.STRING, allowNull:false, defaultValue: 'black'},
      isActive: {type: Sequelize.BOOLEAN, allowNull:false, defaultValue: true},
      background: {type: Sequelize.INTEGER, references: {model: 'Background', key: 'id'}}, //TODO definir default, o politica de random
      createdAt: {allowNull: false, type: Sequelize.DATE},
      updatedAt: {allowNull: false, type: Sequelize.DATE}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Post',{});
  }
};