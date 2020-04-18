const priv = require('./private.json');

module.exports = {
    // Database config
    db_username: priv.db_username,
    db_password: priv.db_password,
    db_database: priv.db_database,
    db_host: priv.db_host,
    db_dialect: "postgres",

    // App constants
    firstNPosts: 20,
    fonts: ["Arial","Verdana"],
}