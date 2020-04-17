const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./src/config/database');
const hbs = require('express-handlebars')
const routes = require('./src/routes');
// require('./relations');

// Init database
db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));


// Handlebars config
app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname:'.hbs',
}));
app.set('view engine','.hbs');


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
// Init Routes
app.use('/',routes);


// Start the app
app.listen(8000, () => {
  console.log('Example app listening on port 8000')
});