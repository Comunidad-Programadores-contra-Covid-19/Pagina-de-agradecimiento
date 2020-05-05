const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./src/config/dbInit');
const hbs = require('express-handlebars')
const routes = require('./src/routes');
const config = require('./src/config/config');
const checkIp = require('./src/middlewares/checkIp')


// Init database
db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));


// Handlebars config
app.engine('.hbs', hbs({
  extname:'.hbs',
  defaultLayout: 'default',
  layoutsDir: path.join(__dirname,'/src/views/layouts'),
}));
app.set('views','src/views/');
app.set('view engine','.hbs');
app.set('trust proxy',true);


// Middlewares
app.use(express.static(path.join(__dirname,'/src/views/static')))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
// app.use('/post', checkIp.ipChecker); // Check ip for post creating
app.use('/',routes); // Init Routes


// Start the app
app.listen(config.port, () => {
  console.log('Example app listening on port '.concat(config.port));
});

