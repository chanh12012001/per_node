const taskController = require('../controllers/task_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewTask", taskController.createNewTask);

module.exports = router 