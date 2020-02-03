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

router.get('/:vin', (req, res) => {
    const { vin } = req.params;
  
    db('car-dealer').where({ vin }).first()
      .then(car => {
        res.json(car);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve car' });
      });
  });
  
  router.post('/', (req, res) => {
    const fruitData = req.body;
    db('car-dealer').insert(carData)
      .then(ids => {
        db('cars').where({ vin: vins[0] })
          .then(newCar => {
            res.status(201).json(newCar);
          });
      })
      .catch(err => {
        console.log('POST error', err);
        res.status(500).json({ message: "Failed to store data" });
      });
  });
  
  module.exports = router;