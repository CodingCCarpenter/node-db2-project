const express = require('express');

// compare this to the original code in the guided repo ... this is the "best
// practice" way to do it... keep your db config out of your express router
// code. That way, multiple router files can "require()" the same db config.
// Keep it DRY!
const db = require('../data/db-config.js');
// const knex = require('knex');

// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// });

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
});