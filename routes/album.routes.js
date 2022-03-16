const albumController = require('../controllers/album_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewAlbum", albumController.createNewAlbum);

module.exports = router 