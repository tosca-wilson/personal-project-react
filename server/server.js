const path = require('path')
const express = require('express')

const server = express()
const plants = require('./routes/plants')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/plants', plants)


module.exports = server
