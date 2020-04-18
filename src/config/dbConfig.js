const config = require('./config');

module.exports = {
    development: {
        username: config.db_username,
        password: config.db_password,
        database: config.db_database,
        host: config.db_host,
        dialect: config.db_dialect,
        operatorsAliases: false
    },
    test: {
        username: config.db_username,
        password: config.db_password,
        database: config.db_database,
        host: config.db_host,
        dialect: config.db_dialect,
        operatorsAliases: false
    },
    production: {
        username: config.db_username,
        password: config.db_password,
        database: config.db_database,
        host: config.db_host,
        dialect: config.db_dialect,
        operatorsAliases: false
    }
}