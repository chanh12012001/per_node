const healthyIndexController = require('../controllers/healthy_index_controller')
const express = require('express')
const router = express.Router()
const upload = require('../config/multer.config')

router.post("/create-new-healthy-index", upload.single('image'), healthyIndexController.createNewHealthyIndex)

router.get("/get-all-healthy-indexs", healthyIndexController.getAllHealthyIndexs)

module.exports = router  
 