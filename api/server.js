const express = require('express');
const helmet = require('helmet');

// const carsRouter = require('../car-dealer/cars-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/car-dealer'/*, carsRouter*/);

module.exports = server;