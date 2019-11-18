const config = require('../../knexfile').development
const connection = require('knex')(config)

function getPlants (db = connection) {
  return db('plants')
}

module.exports = {
  getPlants
}