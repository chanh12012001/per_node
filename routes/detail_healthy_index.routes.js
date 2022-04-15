const detailHealthyIndexController = require('../controllers/detail_healthy_index_controller')
const express = require('express')
const router = express.Router()

router.post("/create-new-detail-healthy-index", detailHealthyIndexController.createNewDetailHealthyIndex);

router.get("/get-all-detail-healthy-index/:id", detailHealthyIndexController.getAllDetailHealthyIndexByUserId);

router.delete("/delete-detail-healthy-index/:id", detailHealthyIndexController.deleteDetailHealthyIndex);

module.exports = router