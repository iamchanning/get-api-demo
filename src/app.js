const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes)

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

module.exports = server
