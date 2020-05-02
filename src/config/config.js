const priv = require('./private/private.json') || null;
const configTwitter = require('./private/configTwitter.json')

module.exports = {
    //node configs
    port: process.env.PORT || 8000,

    // Database config
    db_username: priv.db_username || null,
    db_password: priv.db_password || null,
    db_database: priv.db_database || null,
    db_host: priv.db_host || null,
    db_dialect: "postgres",

    // Twitter config
  	consumer_key: process.env.consumer_key || configTwitter.consumer_key,
 	consumer_secret: process.env.access_token_secret || configTwitter.consumer_secret,
  	access_token: process.env.access_token_secret || configTwitter.access_token,
  	access_token_secret: process.env.access_token_secret || configTwitter.access_token_secret,

    // App constants
    domain: process.env.domain || 'http://localhost:8000',
    firstNPosts: 40,
    fonts: ["Arial","Verdana"],
}