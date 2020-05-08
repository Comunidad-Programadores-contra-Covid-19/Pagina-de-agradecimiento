const nodemailer = require('nodemailer');
const config = require('../config/config');


module.exports = nodemailer.createTransport({
    pool: config.mail_pool,
    host: config.mail_host,
    port: config.mail_port,
    secure: config.mail_tls, // use TLS
    auth: {
      user: config.mail_user,
      pass: config.mail_password
    }
  });