const Task = require('../models/task_model')

async function createNewTask(params, callback) {
    Task.create({
        title: params.title,
        note: params.note,
        isCompleted: params.isCompleted,
        date: params.date,
        startTime: params.startTime,
        endTime: params.endTime,   
        color: params.color, 
        remind: params.remind,
        repeat: params.repeat,
        userId: params.userId,  
    })
    .then((task) => {
        return callback(null, {message: 'Thêm thành công', task})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllTasks(params, callback) {
    Task.find({userId: params})
    .then((tasks) => {
        return callback(null, {tasks})
    })
    .catch((error) => {
        return callback(error)
    })
}

module.exports = {
    createNewTask,
    getAllTasks,
}
