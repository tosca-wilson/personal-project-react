const express = require('express')

const db = require('../db/plants')

const router = express.Router()

router.get('/', (request, response) => {
  db.getPlants()
    .then(plants => response.json(plants))

})

module.exports = router