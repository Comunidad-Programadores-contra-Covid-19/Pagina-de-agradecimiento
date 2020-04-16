const express = require('express')
const app = express();
const db = require('./src/config/database');
const routes = require('./src/routes');

// require('./relations');

db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));
  
app.use('/',routes);



app.listen(8000, () => {
  console.log('Example app listening on port 8000')
});