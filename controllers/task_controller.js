const taskService = require("../services/tasks.services")

var functions = {
    createNewTask: (req, res, next) => {
        taskService.createNewTask(req.body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    }
}

module.exports = functions