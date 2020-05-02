let priv = {}
let configTwitter = {}
if(!process.env.consumer_key){
    priv = require('./private/private.json');
}

if(!process.env.consumer_key) {
    configTwitter = require('./private/configTwitter.json')
}

module.exports = {
    //node configs
    port: process.env.PORT || 8000,

    // Database config
    db_username: process.env.consumer_key || priv.db_username,
    db_password: process.env.consumer_key || priv.db_password,
    db_database: process.env.consumer_key || priv.db_database,
    db_host: process.env.consumer_key || priv.db_host,
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