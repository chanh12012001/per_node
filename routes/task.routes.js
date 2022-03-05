const taskController = require('../controllers/task_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewTask", taskController.createNewTask);

router.get("/getAllTasks", taskController.getAllTasks);

router.delete("/deleteTask/:id", taskController.deleteTask);

module.exports = router 