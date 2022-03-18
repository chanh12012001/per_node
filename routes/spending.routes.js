const spendingController = require('../controllers/spending_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewSpending", spendingController.createNewSpending);

router.get("/getAllSpending", spendingController.getAllSpending);

module.exports = router 