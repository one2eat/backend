const config = require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => res.send({ message: 'Hello World' }))

app.listen(process.env.PORT || 6900, () => {
  console.log(`Server is listening on localhost:${process.env.PORT || 6900}`)
})