const imagesAlbumController = require('../controllers/images_album_controller')
const express = require('express')
const router = express.Router()
const upload = require('../config/multer.config')

router.post("/upload-images-album", upload.array('image'), imagesAlbumController.uploadImagesToAlbum)

router.get("/get-all-images-by-albumid", imagesAlbumController.getAllImagesByAlbumId)

router.delete("/delete-images-of-album/:ids", imagesAlbumController.deleteImagesOfAlbum)

module.exports = router  
 