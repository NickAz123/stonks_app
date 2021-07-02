const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
require('dotenv').config();

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

//Database connection configuration
const { Pool } = require('pg');
const dbParams = require('./lib/db.js')
const db = new Pool(dbParams);
console.log(dbParams)
db.connect();

//Query Functions
const getUser = function() {
  return db
  .query(
    `SELECT * FROM users`
  )
  .then((result) => {
    return result.rows
  })
  .catch((err) => {
   return err.message;
  })
}

// Sample GET route
App.get('/api/data', (req, res) => {
  // const user = getUser()
  // res.json({user})
  db.query(`SELECT * FROM users;`)
  .then(data => {
    const users = data.rows;
    res.json({ users });
  })
  .catch(err => {
    res
      .status(500)
      .json({error: err.message});
  });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
