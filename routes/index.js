const express = require('express')
const app = express.Router()

app.get('/', (req, res) => res.send({
  message: 'Hello World from router'
}))

module.exports = app