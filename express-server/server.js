const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
require('dotenv').config();
const fs = require('fs')

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

// Get Route for current logged in user
App.get('/api/users', (req, res) => {
  db.query(`SELECT * FROM users WHERE id=1;`)
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

//Get route for transactions for logged in user
App.get('/api/transactions', (req, res) => {
  db.query(`SELECT * FROM transactions WHERE user_id=1;`)
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

//Get route for entire stock list
App.get('/api/all-stocks', (req, res) => {
  let allstocks = fs.readFileSync('nyse_full_tickers.json');
  let stocks = JSON.parse(allstocks);
  res.json({stocks});
})

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
