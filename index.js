const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./src/config/dbInit');
const hbs = require('express-handlebars')
const routes = require('./src/routes');

// Init database
db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

app.use(express.static(path.join(__dirname,'/src/views/static')))

// Handlebars config
app.engine('.hbs', hbs({
  extname:'.hbs',
  defaultLayout: 'default',
  layoutsDir: path.join(__dirname,'/src/views/layouts'),
}));
app.set('views',path.join(__dirname,'/src/views'))
app.set('view engine','.hbs');


// Start the bodyParser, used for req.body as json
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies


// Init Routes
app.use('/',routes);


// Start the app
app.listen(8000, () => {
  console.log('Example app listening on port 8000')
});