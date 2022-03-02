const express = require("express");
const routes = require('./routes/user.routes')
const routesTask = require('./routes/task.routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)
app.use('/', routesTask)

module.exports = app