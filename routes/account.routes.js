const accountController = require('../controllers/account_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewAccount", accountController.createNewAccount);

router.get("/getAllAccounts", accountController.getAllAccounts);

router.delete("/deleteAccount/:id", accountController.deleteAccount);

router.put("/updateAccount/:id", accountController.updateAccount);

module.exports = router  