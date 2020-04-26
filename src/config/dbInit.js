const Sequelize = require('sequelize');
const config = require('./config');

//para correr en memoria
// module.exports = new Sequelize('sqlite::memory:');


const sequelize = new Sequelize(
    config.db_database,
    config.db_username,
    config.db_password,
  {
    host: config.db_host,
    dialect: config.db_dialect,
  }
);


module.exports = sequelize;


//revisar para produccion lo de abajo, crea un pool de dbs, supongo que es para concurrencia
// const sequelize = new Sequelize(/* ... */, {
//   // ...
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });