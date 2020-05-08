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
 	  consumer_secret: process.env.consumer_secret || configTwitter.consumer_secret,
  	access_token: process.env.access_token || configTwitter.access_token,
  	access_token_secret: process.env.access_token_secret || configTwitter.access_token_secret,
    
    // Mail configs
    mail_pool: true,
    mail_tls: true,
    mail_host: process.env.mail_host || priv.mail_host,
    mail_port: 465,
    mail_user: process.env.mail_user || priv.mail_user,
    mail_password: process.env.mail_password || priv.mail_password,

    // App constants
    domain: process.env.domain || 'http://localhost:8000',
    firstNPosts: 40,
    minTimeToCreateAPost: 2 //minutes
}