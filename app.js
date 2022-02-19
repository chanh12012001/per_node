const express = require("express");
const routes = require('./routes/user.routes')
const routes1 = require('./routes/product.routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)

app.use('/', routes1)

module.exports = app