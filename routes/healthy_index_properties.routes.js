const healthyIndexPropertiesController = require('../controllers/healthy_index_properties_controller')
const express = require('express')
const router = express.Router()

router.post("/create-new-healthy-index-properties", healthyIndexPropertiesController.createNewHealthyIndexProperties);

router.get("/get-all-healthy-index-properties", healthyIndexPropertiesController.getAllHealthyIndexProperties);

router.delete("/delete-healthy-index-properties/:id", healthyIndexPropertiesController.deleteHealthyIndexProperties);

module.exports = router  