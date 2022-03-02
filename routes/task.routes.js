const taskController = require('../controllers/task_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewTask", taskController.createNewTask);

router.get("/getAllTasks/:userId", taskController.getAllTasks);

module.exports = router 