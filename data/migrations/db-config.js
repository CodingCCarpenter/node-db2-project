// get the knex method. 
const knex = require('knex');

// get a configuration object out of knexfile.js. Knesfile.js must export an
// object. 
const config = require('../knexfile.js');

// export the knex database object, which is returned by calling the knex()
// method, and passing in the configuration object we want. 
module.exports = knex(config.development);