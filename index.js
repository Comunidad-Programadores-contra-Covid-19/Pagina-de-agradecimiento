const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./src/config/dbInit');
const hbs = require('express-handlebars')
const routes = require('./src/routes');
const config = require('./src/config/config');
const checkIp = require('./src/middlewares/checkIp')
const err404 = require('./src/middlewares/404')
const favicon = require('serve-favicon');
// var sitemap = require('express-sitemap')();
 
 


// Init database
db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));


// Handlebars config
app.engine('.hbs', hbs({
  extname:'.hbs',
}));
app.set('views','src/views/');
app.set('view engine','.hbs');
app.set('trust proxy',true);


// Middlewares
app.use(express.static(path.join(__dirname,'/src/views/static')))
app.use(favicon(path.join(__dirname,'/src/views/static/img','clap-green-background.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/post', checkIp.ipChecker);
// app.use('/post', checkIp.ipChecker); // Check ip for post creating
app.use('/',routes);
app.use(err404.e404);

// sitemap.generate(app); TODO ver onda

// Start the app
app.listen(config.port, () => {
  console.log('Example app listening on port '.concat(config.port));
});

