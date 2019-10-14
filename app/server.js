const express = require('express') // importing express library
const server = express() // initialising express library
const bodyParser = require('body-parser') // initialise body-parser

server.use(bodyParser.json())

server.get('/', (req, res) => res.send('Hello World!')) // when user hits home page, return "Hello World!"

module.exports = server
