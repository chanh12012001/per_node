const express = require("express");
const routes = require('./routes/user.routes')
const routesTask = require('./routes/task.routes')
const routesSpending = require('./routes/spending.routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)
app.use('/', routesTask)
app.use('/', routesSpending)

module.exports = app