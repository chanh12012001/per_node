const express = require("express");
const routes = require('./routes/user.routes')
const routesTask = require('./routes/task.routes')
const routesAlbum = require('./routes/album.routes')
const routesImagesAlbum = require('./routes/images_album.routes')
const routesNote = require('./routes/note.routes')
const routesHealthyIndex = require('./routes/healthy_index.routes')
const routesDetailHealthyIndex = require('./routes/detail_healthy_index.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)
app.use('/', routesTask)
app.use('/', routesTask)
app.use('/', routesAlbum)
app.use('/', routesImagesAlbum)
app.use('/', routesNote)
app.use('/', routesHealthyIndex)
app.use('/', routesDetailHealthyIndex)

module.exports = app