const productController = require('../controllers/product_controller')

const express = require('express')
const router = express.Router()

router.get('/products', productController.index)

router.post('/products', productController.new)

router.get('/product/:id', productController.view)

router.put('/product/:id', productController.update)

router.delete('/product/:id', productController.delete)

module.exports = router